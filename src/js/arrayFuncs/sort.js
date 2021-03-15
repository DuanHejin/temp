let arr = [30, 12, 102, 5];
const newArr = arr.sort();

console.log('newArr :>> ', newArr);
console.log('arr :>> ', arr);

arr[0] = 100;
console.log('newArr :>> ', newArr);
console.log('arr :>> ', arr);


arr = ['30', '12', '102', '5'];
arr.sort((a, b) => {
  return a > b ? 1 : -1;
});
console.log('arr :>> ', arr);


const twoArr = [
  [99, 98, 97],
  [89, 88, 87],
  [79, 78, 77],
];

const findMin = (arr) => {
  let min = arr[0];
  for (const row of arr) {
    if (row < min) {
      min = row;
    }
  }
  return min;
}

twoArr.sort((a, b) => {
  console.log('a :>> ', a);
  const aMin = findMin(a);
  const bMin = findMin(b);
  return aMin > bMin ? 1 : -1;
});

for (const arr of twoArr) {
  arr.sort((a, b) => {
    return a > b ? 1 : -1;
  });
}
console.log('twoArr :>> ', twoArr);

