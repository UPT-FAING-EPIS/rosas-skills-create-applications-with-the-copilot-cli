#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports basic arithmetic operations: addition, subtraction, multiplication, division
 * 
 * Usage: node src/calculator.js <num1> <operator> <num2>
 * Example: node src/calculator.js 5 + 3
 */

const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error('Usage: node src/calculator.js <num1> <operator> <num2>');
  console.error('Operators: + - * /');
  process.exit(1);
}

const num1 = parseFloat(args[0]);
const operator = args[1];
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.error('Error: Please provide valid numbers');
  process.exit(1);
}

let result;

switch (operator) {
  case '+':
    result = num1 + num2;
    break;
  case '-':
    result = num1 - num2;
    break;
  case '*':
    result = num1 * num2;
    break;
  case '/':
    if (num2 === 0) {
      console.error('Error: Division by zero is not allowed');
      process.exit(1);
    }
    result = num1 / num2;
    break;
  default:
    console.error(`Error: Unknown operator '${operator}'. Supported operators: + - * /`);
    process.exit(1);
}

console.log(`${num1} ${operator} ${num2} = ${result}`);
