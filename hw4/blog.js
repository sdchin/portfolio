import { Post } from "./Post.js";
import * as BlogDialog from "./blogdialog.js";

const ADD_MESSAGE = "Fill in the fields and click confirm when you're done.";
const EDIT_MESSAGE = "Edit the fields and click confirm when you're done.";
const DELETE_MESSAGE = "Are you sure you want to delete this blog post?";

window.addEventListener("DOMContentLoaded", init);

function init() {
  prepopulate();
  let addButton = document.getElementById("add");
  addButton.addEventListener("click", addHandler);
}

function prepopulate() {
  let defaultPosts = new Array();
  defaultPosts.push(new Post("Cats", "2023-01-01", "I love this movie!"));
  defaultPosts.push(new Post("JavaScript", "2023-03-01", "GRR!"));
  defaultPosts.push(new Post("Bananas", "2019-02-04", "Fave! Yum!"));

  for (let postObj of defaultPosts) {
    let post = addPost(postObj);
    document.body.prepend(post);
  }
}

function addPost(postObj) {
  const post = document.createElement("article");
  const contents = `
      <h2>${postObj.title}</h2>
      <time datetime="${postObj.date}">${postObj.date}</time>
      <p>${postObj.summary}</p>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    `;
  post.innerHTML = contents;

  let editButton = post.querySelector(".edit");
  editButton.addEventListener("click", () => {
    editHandler(post, postObj);
  });

  let deleteButton = post.querySelector(".delete");
  deleteButton.addEventListener("click", () => {
    deleteHandler(post, postObj);
  });

  storePost(postObj);
  return post;
}

function editPost(post, postObj, dialog) {
  postObj.title = dialog.querySelector("#newtitle").value;
  postObj.date = dialog.querySelector("#newdate").value;
  postObj.summary = dialog.querySelector("#newsummary").value;

  post.querySelector("h2").textContent = postObj.title;
  post.querySelector("time").textContent = postObj.date;
  post.querySelector("p").textContent = postObj.summary;

  let localObj = JSON.parse(localStorage.getItem(postObj.id));
  localObj.title = postObj.title;
  localObj.date = postObj.date;
  localObj.summary = postObj.summary;
  localStorage.setItem(localObj.id, JSON.stringify(localObj));
}

function deletePost(post, postObj) {
  post.remove();
  localStorage.removeItem(postObj.id);
}

function storePost(postObj) {
  if (localStorage.getItem(postObj.id)) {
    return;
  }

  localStorage.setItem(postObj.id, JSON.stringify(postObj));
}

function addHandler() {
  const dialog = BlogDialog.createAdd(ADD_MESSAGE);
  dialog.showModal();

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "add") {
      let title = dialog.querySelector("#title").value;
      let date = dialog.querySelector("#date").value;
      let summary = dialog.querySelector("#summary").value;
      let postObj = new Post(title, date, summary);
      let post = addPost(postObj);
      document.body.prepend(post);
    }
    dialog.remove();
  });
}

function editHandler(post, postObj) {
  const dialog = BlogDialog.createEdit(EDIT_MESSAGE, postObj);
  dialog.showModal();

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "ok") {
      editPost(post, postObj, dialog);
    }
    dialog.remove();
  });
}

function deleteHandler(post, postObj) {
  const dialog = BlogDialog.createDelete(DELETE_MESSAGE);
  dialog.showModal();

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "delete") {
      deletePost(post, postObj);
    }
    dialog.remove();
  });
}
