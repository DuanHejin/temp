function PersonBase() {
  this.className = 'PersonBase';
}
PersonBase.prototype.showClassName = function () {
  console.log('this.className :>> ', this.className);
}

const Person = (function () {
  let person = null;
  return function () {
    if (!person) {
      person = new PersonBase;
    }
    return person;
  }
})();

const p1 = new Person();
console.log('p1.className :>> ', p1.className);
p1.showClassName();
const p2 = new Person();

console.log('p1 === p2 :>> ', p1 === p2);
