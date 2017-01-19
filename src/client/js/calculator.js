/**
 * Sums two numbers
 */
function sum(a, b) {
  const param1 = a || 0;
  const param2 = b || 0;
  return param1 + param2;
}

/**
 * Subtracts two numbers
 */
function subtract(a, b) {
  const param1 = a || 0;
  const param2 = b || 0;
  return param1 - param2;
}

/**
 * Divides two numbers
 */
function divide(a, b) {
  const param1 = a || 1;
  const param2 = b || 1;
  return param1 / param2;
}

/**
 * Multiplies two numbers
 */
function multiply(a, b) {
  const param1 = a || 1;
  const param2 = b || 1;
  return param1 * param2;
}

export {
  sum,
  subtract,
  divide,
  multiply,
}
