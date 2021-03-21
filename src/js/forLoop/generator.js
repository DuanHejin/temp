// function *simpleGenerator() {
//   yield '1';
//   yield '2';
//   yield '3';
// }

// const gen = simpleGenerator();
// console.log('gen.next() :>> ', gen.next());
// console.log('gen.next() :>> ', gen.next());
// console.log('gen.next() :>> ', gen.next());
// console.log('gen.next() :>> ', gen.next());

function mockGenerator(list) {
  let i = 0;
  let length = list.length;

  return {
    next() {
      const isDone = i >= length;
      return {
        value: !isDone ? list[i++] : undefined,
        done: isDone,
      }
    }
  }
}

let res = { done: false };
const gen = mockGenerator([1, 2, 3, 4]);

while (!res.done) {
  res = gen.next();
  if (!res.done) {
    console.log('res :>> ', res);
  }
}