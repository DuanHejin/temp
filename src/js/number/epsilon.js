const epsilon = Number.EPSILON;

function isNumberEqual(a, b) {
  return Math.abs(a - b) < epsilon;
}

const isEqual = isNumberEqual(0.1 + 0.2, 0.3);
console.log('isEqual :>> ', isEqual);
