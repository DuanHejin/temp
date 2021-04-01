var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
const newArr = arr.flat(Infinity);
console.log('newArr :>> ', newArr);
const sortedArr = [...new Set(arr.flat(Infinity))]
sortedArr.sort((a, b) => (a - b));
console.log('sortedArr :>> ', sortedArr);
