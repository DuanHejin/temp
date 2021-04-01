var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];
// const newArr = arr.flat(Infinity);
// console.log('newArr :>> ', newArr);
// const sortedArr = [...new Set(arr.flat(Infinity))]
// sortedArr.sort((a, b) => (a - b));
// console.log('sortedArr :>> ', sortedArr);

function flat(arr) {
  let result = [];
  for (const item of arr) {
    if (item instanceof Array) {
      result = result.concat(flat(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

const flatedArr = flat(arr);
console.log('flatedArr :>> ', flatedArr);
const uniqueArr = [...new Set(flatedArr)];
console.log('uniqueArr :>> ', uniqueArr);
uniqueArr.sort((a, b) => (a - b));
console.log('uniqueArr :>> ', uniqueArr);

