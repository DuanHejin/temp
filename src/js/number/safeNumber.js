const max = Number.MAX_SAFE_INTEGER;
console.log('max :>> ', max);

const maxVal = 2 ** 53 - 1;
console.log('maxVal :>> ', maxVal);

const min = Number.MIN_SAFE_INTEGER;
console.log('min :>> ', min);

const minVal = - (2 ** 53 - 1);
console.log('minVal :>> ', minVal);

console.log('Number.MAX_VALUE :>> ', Number.MAX_VALUE);

const infinite = Number.MAX_VALUE + Number.MAX_VALUE;
console.log('infinite :>> ', infinite);

const test = 'te';
console.log('isNaN(test) :>> ', isNaN(test));
console.log('Number.isNaN(test) :>> ', Number.isNaN(test));