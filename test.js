const operator = prompt("Enter an operator");

const number1 = parseFloat(prompt("Enter the first number"));
const number2 = parseFloat(prompt("Enter second number"));

let result;

if (operator == "+") {
  result = number1 + number2;
} else if ((operator = "-")) {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else {
  result = "No operator";
}

console.log(`${number1} ${operator} ${number2} = ${result}`);
