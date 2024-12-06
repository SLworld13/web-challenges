console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPostElement = document.createElement("article");
newPostElement.textContent = "New Post";
newPostElement.classList.add("post__content");

const newPostHeaderElement = document.createElement("h2");
newPostHeaderElement.textContent = "New Post Title";
newPostElement.appendChild(newPostHeaderElement);

const newPostBodyElement = document.createElement("p");
newPostBodyElement.textContent =
  "This is a new post. Click the like button to like it.";
newPostElement.appendChild(newPostBodyElement);
