const obj = new Object;
obj.name = 'obj';

console.log('obj :>> ', obj);

console.log('typeof obj :>> ', typeof obj);

const res = Object.prototype.toString.call(obj);
console.log('res :>> ', res);

console.log('', Object.prototype.toString.call(obj));
console.log('', Object.prototype.toString.call([]));
console.log('', Object.prototype.toString.call(new Date));
console.log('', Object.prototype.toString.call(RegExp()));

console.log('', Object.prototype.toString.call(NaN));

console.log('', Object.prototype.toString.call(undefined));
console.log('', Object.prototype.toString.call(null));
console.log('', Object.prototype.toString.call(new Boolean));
console.log('', Object.prototype.toString.call(new Number));
console.log('', Object.prototype.toString.call(new String));
console.log('', Object.prototype.toString.call(Symbol()));

console.log('typeof null :>> ', typeof null);
console.log('typeof undefined :>> ', typeof undefined);

console.log('null == undefined :>> ', null == undefined);
console.log('null === undefined :>> ', null === undefined);
console.log('void 0 === undefined :>> ', void 0 === undefined);