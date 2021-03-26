const arr = [1, 2, 3];

// const it = arr[Symbol.iterator]();

function *hackIterator() {
  yield 'a';
  yield 'b';
  yield 'c';
}

arr[Symbol.iterator] = hackIterator;

for (const it of arr) {
  console.log('it :>> ', it);
}

const it = hackIterator();

console.log('it[Symbol.iterator]() === it :>> ', it[Symbol.iterator]() === it);;
