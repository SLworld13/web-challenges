console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD == receivedPassword) {
  console.log("Welcome!");
} else {
  console.log("Access denied");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("The Number is even!");
} else {
  console.log("The Number is odd!");
}

console.log("The Number is " + (number % 2 === 0 ? "even" : "odd"));

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log(2 * numberOfHotdogs);
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  console.log(1.5 * numberOfHotdogs);
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  console.log(1.0 * numberOfHotdogs);
} else if (numberOfHotdogs >= 1000000) {
  console.log(0.1 * numberOfHotdogs);
}
let price; // Variable für den Preis

// Part 4: Daytime
const currentHour = 12;

const statement = "";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + "//enter your code here" + "!";

console.log(greeting);
