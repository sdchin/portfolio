import { Post } from "./Post.js";

window.addEventListener("DOMContentLoaded", init);

function init() {
  const defaultArray = new Array();
  defaultArray.push(new Post("Cats", "2023-01-01", "I love this movie!"));
  defaultArray.push(new Post("JavaScript", "2023-03-01", "GRR!"));
  defaultArray.push(new Post("Bananas", "2019-02-04", "Fave! Yum!"));
  populatePage(defaultArray);
}

function populatePage(posts) {
  for (let post of posts) {
    const article = document.createElement("article");
    const contents = `
      <h2>${post.title}<\h2>
      <time datetime="${post.date}">${post.date}</time>
      <p>${post.summary}</p>
    `;
    article.innerHTML = contents;
    document.body.prepend(article);
  }
}
