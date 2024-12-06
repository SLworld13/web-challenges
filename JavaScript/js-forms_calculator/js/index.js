console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const operator = event.target.elements["operator"].value;
  const number1 = event.target.elements["number1"].value;
  const number2 = event.target.elements["number2"].value;

  let result;

  switch (operator) {
    case "+":
      result = add(number1, number2);
      break;
    case "-":
      result = subtract(number1, number2);
      break;
    case "x":
      result = multiply(number1, number2);
      break;
    case "/":
      result = divide(number1, number2);
      break;
    default:
      alert("Invalid operator");
      return;
  }

  // --v-- write your code here --v--

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
