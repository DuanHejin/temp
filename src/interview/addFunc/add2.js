// 实现 (5).add(3).minus(2) 功能
Number.prototype.add = function add(val) {
  return this.valueOf() + val;
}

Number.prototype.minus = function minus(val) {
  return this.valueOf() - val;
}

const res = (5).add(3).minus(2);
console.log('res :>> ', res);


var a = { n: 1 };
var b = a;
a.x = a = { n: 2 };
console.log(a.x);
console.log(b.x);