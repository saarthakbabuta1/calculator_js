// Calculator using if else statement

const operator = prompt("Enter an operator --> +,-,*,/");

const number1 = parseFloat(prompt("Enter the first number"));
const number2 = parseFloat(prompt("Enter the second number"));

let result;

if (operator == "+") {
  result = number1 + number2;
} else if (operator == "-") {
  result = number1 - number2;
} else if (operator == "*") {
  result = number1 * number2;
} else {
  result = "No operator";
}

console.log(`${number1} ${operator} ${number2} = ${result}`);

function Calculator(operator, number1, number2) {
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

  return result;
}

var result = Calculator(operator, number1, number2);
console.log(result);

// I have updated the code.
