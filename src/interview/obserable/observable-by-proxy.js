const cbs = new Set;
const observe = cb => cbs.add(cb);
const observable = obj => new Proxy(obj, { set });

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  cbs.forEach(cb => cb())
  return result;
}

// const person = observable({
//   name: 'test'
// })
// function print() {
//   console.log('person.name :>> ', person.name);
// }
// observe(print)

// person.name = 'aaafdsf';

let valDom, newValDom, valNode, newValNode;

function changeNewInputVal() {
  newValDom.value = valNode.value;
}

function handleInputChange() {
  valNode.value = valDom.value;
}

window.onload = function onload() {
  valDom = document.getElementById("val");
  newValDom = document.getElementById("newVal");
  // newValNode = observable({ value: newValDom.value });

  valNode = observable({ value: valDom.value });
  observe(changeNewInputVal);
};