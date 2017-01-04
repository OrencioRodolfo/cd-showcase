function sum(a, b) {
  const param1 = a || 0;
  const param2 = b || 0;
  return param1 + param2;
}

function decrement(a, b) {
  const param1 = a || 0;
  const param2 = b || 0;
  return param1 - param2;
}


export {
  sum,
  decrement,
}
