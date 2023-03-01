import { Post } from "./Post.js";
import * as BlogDialog from "./blogdialog.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const defaultArray = new Array();
  defaultArray.push(new Post("Cats", "2023-01-01", "I love this movie!"));
  defaultArray.push(new Post("JavaScript", "2023-03-01", "GRR!"));
  defaultArray.push(new Post("Bananas", "2019-02-04", "Fave! Yum!"));
  populatePage(defaultArray);
}

function populatePage(posts) {
  for (let postObj of posts) {
    let post = createPost(postObj);
    document.body.prepend(post);
  }
}

function createPost(postObj) {
  const article = document.createElement("article");
  const contents = `
      <h2>${postObj.title}<\h2>
      <time datetime="${postObj.date}">${postObj.date}</time>
      <p>${postObj.summary}</p>
      <button id="edit">Edit</button>
      <button id="delete">Delete</button>
    `;
  article.innerHTML = contents;

  let editButton = article.querySelector("#edit");
  editButton.addEventListener("click", () => {
    const message = "Edit the fields and click confirm when you're done.";
    const dialog = BlogDialog.createEdit(message);
    dialog.showModal();
  });

  let deleteButton = article.querySelector("#delete");
  deleteButton.addEventListener("click", () => {
    const message = "Are you sure you want to delete this blog post?";
    const dialog = BlogDialog.createDelete(message);
    dialog.showModal();
  });

  return article;
}
