#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports arithmetic operations: addition, subtraction, multiplication, division,
 * modulo, exponentiation (power), and square root
 */

// Core calculator functions (exported for testing)
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
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero is not allowed');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI interface
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error('Usage: node src/calculator.js <num1> <operator> <num2>');
    console.error('       node src/calculator.js sqrt <num>');
    console.error('Operators: + - * / % ** sqrt');
    process.exit(1);
  }

  // Handle square root (single argument)
  if (args[0] === 'sqrt') {
    const n = parseFloat(args[1]);
    if (isNaN(n)) {
      console.error('Error: Please provide a valid number');
      process.exit(1);
    }
    try {
      const result = squareRoot(n);
      console.log(`sqrt(${n}) = ${result}`);
    } catch (err) {
      console.error(`Error: ${err.message}`);
      process.exit(1);
    }
    process.exit(0);
  }

  if (args.length !== 3) {
    console.error('Usage: node src/calculator.js <num1> <operator> <num2>');
    console.error('Operators: + - * / % **');
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
  try {
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      case '%':
        result = modulo(num1, num2);
        break;
      case '**':
        result = power(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operator '${operator}'. Supported operators: + - * / % **`);
        process.exit(1);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }

  console.log(`${num1} ${operator} ${num2} = ${result}`);
}
