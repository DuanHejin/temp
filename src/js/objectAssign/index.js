const lodash = require('../../assets/js/lodash');

const person1 = {
  name: 'John',
  age: 30,
};

const person2 = {
  name: 'Jane',
  age: 25,
};
// 将person1和person2的属性合并到person3中，person1中属性为undefined的值不用合并

const person3 = lodash.assign({}, person1, person2);

console.log(`|----    person3`, person3);

const person4 = Object.assign({}, person1, person2);

console.log(`|----    person4`, person4);

const person5 = Object.assign({}, person1, { name: '' });
console.log(`|----    person5`, person5);

const person6 = {}
Object.assign(person6, person1, { name: '' });
console.log(`|----    person6`, person6);



