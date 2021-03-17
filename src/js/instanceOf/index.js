function myInstanceOf(obj1, obj2 = Object) {

  let proto = Object.getPrototypeOf(obj1);
  const prototype = obj2.prototype;

  while (true) {
    if (!proto) {
      return false;
    }
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
}

function Person(name) {
  this.name = name;
}

function Male(name, sex) {
  Person.call(this, name);
  this.sex = sex;
}
Male.prototype = Object.create(Person.prototype);

let p = new Person('p');

const res = myInstanceOf(p, Person);
console.log('res :>> ', res);

let male = new Male('Tom', 'Male');
console.log('myInstanceOf(male, Person) :>> ', myInstanceOf(male, Person));
console.log('myInstanceOf(p, Male) :>> ', myInstanceOf(p, Male));
console.log('myInstanceOf(male, Male) :>> ', myInstanceOf(male, Male));

console.log('p.__proto__ :>> ', p.__proto__);
console.log('male.__proto__ :>> ', male.__proto__);