const inputField = document.querySelector('[data-js="first-input"]');

const button = document.querySelector('[data-js="button-uppercase"]');

button.addEventListener("click", () => {
  inputField.value = inputField.value.toUpperCase();
});
