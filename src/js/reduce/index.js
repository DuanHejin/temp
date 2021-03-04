const arr = [{
  label: 'a',
  value: 1,
}, {
  label: 'b',
  value: 2,
}, {
  label: 'c',
  value: 3,
}, {
  label: 'd',
  value: 4,
}, {
  label: 'e',
  value: 5,
}];

let temp = 0;
const res = arr.reduce((prev, curr, index) => {
  console.log('prev :>> ', prev);
  // return prev.value + curr.value;
  return temp += curr.value;
  
}, temp);
console.log('res :>> ', res);
console.log('temp :>> ', temp);