const arr = Array(3);
console.log('arr :>> ', arr);

console.log('arr.length :>> ', arr.length);

for (const it of arr) {
  console.log('it :>> ', it);
}

console.log('toString :>> ', toString(undefined));

const obj = { value: 1 };
console.log('Object.prototype.valueOf(obj) :>> ', Object.prototype.valueOf(obj));
console.log('Object.prototype.toString(obj) :>> ', Object.prototype.toString(obj));
console.log('obj.valueOf() :>> ', obj.valueOf());
console.log('obj.toString() :>> ', obj.toString());
console.log('typeof obj.toString() :>> ', typeof obj.toString());
console.log('+obj :>> ', +obj);
console.log('typeof (+obj) :>> ', typeof (+obj));
console.log('typeof NaN :>> ', typeof NaN);

const arr2 = [];
console.log('Object.prototype.valueOf(arr2) :>> ', Object.prototype.valueOf(arr2));
console.log('Object.prototype.toString(arr2) :>> ', Object.prototype.toString(arr2));


const objNum = +obj;
console.log('objNum :>> ', objNum);


const objValueOf = {
  valueOf() {
    return 1;
  }
};
console.log('objValueOf == 1 :>> ', objValueOf == 1);
