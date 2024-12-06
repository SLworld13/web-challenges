console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newMessage = document.createElement("li"); // erst ein neues Element(variable) erstellen, in diesem fall ein <li>
  newMessage.textContent = "New message."; // jetzt dem element(varibale) einen Text hinzufügen mit .textcontent, in diesem fall "New message."
  newMessage.classList.add("toast-container__message"); // Jetzt eine CSS klasse hinzufügen, in diesem fall "toast-container__message" .classlist.add
  toastContainer.append(newMessage); // hier muss jetzt die neue nachricht dem toast-Container hinzugefügt werden

  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = ""; //  Inhalt des toast-Container löschen ...funktioniert durch das erstellen eines leeren strings
  // Exercise: Clear the stack of toast messages
});
