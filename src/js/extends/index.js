// js实现继承

function Foo(name) {
  this.name = name;
}
Foo.prototype.showName = function()  {
  console.log('this.name :>> ', this.name);
}

function Bar(name, age) {
  Foo.call(this, name);
  this.age = age;
}
Bar.prototype = Object.create(Foo.prototype);
Bar.prototype.showAge = function() {
  console.log('this.age :>> ', this.age);
}

const f = new Foo('Jerry');
console.log('f.name :>> ', f.name);
f.showName();

const u = new Bar('Tom', 8);
console.log('u.name :>> ', u.name);
console.log('u.age :>> ', u.age);
u.showName();
u.showAge();