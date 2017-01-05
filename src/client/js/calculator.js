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

export {
  sum,
  subtract,
}
