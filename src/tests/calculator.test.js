/**
 * Tests for calculator.js
 * Using Node.js built-in assert module for testing
 */

const assert = require('assert');
const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

let passed = 0;
let failed = 0;

function test(description, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${description}`);
    passed++;
  } catch (err) {
    console.log(`  ❌ FAIL: ${description}`);
    console.log(`     Error: ${err.message}`);
    failed++;
  }
}

console.log('\n=== Calculator Tests ===\n');

// Addition tests
console.log('Addition tests:');
test('adds 2 + 3 = 5', () => assert.strictEqual(add(2, 3), 5));
test('adds -1 + 1 = 0', () => assert.strictEqual(add(-1, 1), 0));
test('adds 0 + 0 = 0', () => assert.strictEqual(add(0, 0), 0));
test('adds 1.5 + 2.5 = 4', () => assert.strictEqual(add(1.5, 2.5), 4));

// Subtraction tests
console.log('\nSubtraction tests:');
test('subtracts 5 - 3 = 2', () => assert.strictEqual(subtract(5, 3), 2));
test('subtracts 3 - 5 = -2', () => assert.strictEqual(subtract(3, 5), -2));
test('subtracts 0 - 0 = 0', () => assert.strictEqual(subtract(0, 0), 0));

// Multiplication tests
console.log('\nMultiplication tests:');
test('multiplies 3 * 4 = 12', () => assert.strictEqual(multiply(3, 4), 12));
test('multiplies -2 * 5 = -10', () => assert.strictEqual(multiply(-2, 5), -10));
test('multiplies 0 * 100 = 0', () => assert.strictEqual(multiply(0, 100), 0));

// Division tests
console.log('\nDivision tests:');
test('divides 10 / 2 = 5', () => assert.strictEqual(divide(10, 2), 5));
test('divides 7 / 2 = 3.5', () => assert.strictEqual(divide(7, 2), 3.5));
test('throws error on division by zero', () => {
  assert.throws(() => divide(5, 0), /Division by zero/);
});

// Modulo tests
console.log('\nModulo tests:');
test('modulo 10 % 3 = 1', () => assert.strictEqual(modulo(10, 3), 1));
test('modulo 15 % 5 = 0', () => assert.strictEqual(modulo(15, 5), 0));
test('modulo -7 % 3 = -1', () => assert.strictEqual(modulo(-7, 3), -1));
test('throws error on modulo by zero', () => {
  assert.throws(() => modulo(5, 0), /Modulo by zero/);
});

// Power tests
console.log('\nPower (exponentiation) tests:');
test('power 2 ** 3 = 8', () => assert.strictEqual(power(2, 3), 8));
test('power 5 ** 0 = 1', () => assert.strictEqual(power(5, 0), 1));
test('power 4 ** 0.5 = 2', () => assert.strictEqual(power(4, 0.5), 2));
test('power 2 ** -1 = 0.5', () => assert.strictEqual(power(2, -1), 0.5));

// Square root tests
console.log('\nSquare root tests:');
test('squareRoot(4) = 2', () => assert.strictEqual(squareRoot(4), 2));
test('squareRoot(9) = 3', () => assert.strictEqual(squareRoot(9), 3));
test('squareRoot(2) = 1.4142...', () => assert.ok(Math.abs(squareRoot(2) - 1.4142135623730951) < 0.0001));
test('squareRoot(0) = 0', () => assert.strictEqual(squareRoot(0), 0));
test('throws error on square root of negative number', () => {
  assert.throws(() => squareRoot(-1), /Cannot calculate square root of a negative number/);
});
test('throws error on square root of -4', () => {
  assert.throws(() => squareRoot(-4), /Cannot calculate square root of a negative number/);
});

console.log(`\n=== Results ===`);
console.log(`Passed: ${passed}`);
console.log(`Failed: ${failed}`);
console.log(`Total: ${passed + failed}`);

if (failed > 0) {
  process.exit(1);
}
