// 该demo需要将代码复制到浏览器环境中执行
function Foo() {
  getName = function () { return 1; };
  return this;
}
Foo.getName = function () { return 2; };
Foo.prototype.getName = function () { return 3; };
var getName = function () { return 4; };
function getName() { return 5; }

//请写出以下输出结果：
console.log(Foo.getName());
console.log(getName());
console.log(Foo().getName());
console.log(getName());
console.log(new Foo.getName());
console.log(new Foo().getName());
console.log(new new Foo().getName());

// 2 4 1 1 2 3 3

// function foo() {
//   getName = function () {
//     console.log(1);
//   }
//   return this;
// }

// getName();

// var getName = function() {
//   console.log(2);
// }
// getName();

// foo();
// getName();
// function getName() {
//   console.log(3);
// }

// getName();