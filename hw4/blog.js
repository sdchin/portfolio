import { Post } from "./Post.js";
import * as BlogDialog from "./blogdialog.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  prepopulate();
}

function prepopulate() {
  let defaultPosts = new Array();
  defaultPosts.push(new Post("Cats", "2023-01-01", "I love this movie!"));
  defaultPosts.push(new Post("JavaScript", "2023-03-01", "GRR!"));
  defaultPosts.push(new Post("Bananas", "2019-02-04", "Fave! Yum!"));

  for (let postObj of defaultPosts) {
    storePost(postObj);
    let post = createPost(postObj);
    document.body.prepend(post);
  }
}

function createPost(postObj) {
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

function deletePost(postObj) {
  localStorage.removeItem(postObj.id);
}

function storePost(postObj) {
  while (localStorage.getItem(postObj.id)) {
    if (localStorage.getItem(postObj.id) !== JSON.stringify(postObj)) {
      postObj.updateId();
    } else {
      return;
    }
  }
  localStorage.setItem(postObj.id, JSON.stringify(postObj));
}

function editHandler(post, postObj) {
  const message = "Edit the fields and click confirm when you're done.";
  const dialog = BlogDialog.createEdit(message, postObj);
  dialog.showModal();

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "ok") {
      editPost(post, postObj, dialog);
    }
  });
}

function deleteHandler(post, postObj) {
  const message = "Are you sure you want to delete this blog post?";
  const dialog = BlogDialog.createDelete(message);
  dialog.showModal();

  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "delete") {
      deletePost(postObj);
      post.remove();
    }
  });
}
