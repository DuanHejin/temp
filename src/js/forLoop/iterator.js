// // 模拟一个Iterator
// function makeIterator() {
//   let i = 0;

//   return {
//     next: function () {
//       return { value: i++, done: false }
//     }
//   }
// }

// const it = makeIterator();
// console.log('it.next() :>> ', it.next());
// console.log('it.next() :>> ', it.next());
// console.log('it.next() :>> ', it.next());
// console.log('it.next() :>> ', it.next());



// // 默认Object类型是不可以遍历的，使用forof会报错 "obj is not iterable "
// const obj = { name: 'obj' };
// try {
//   for (const it of obj) {
//     console.log('it :>> ', it);
//   }
// } catch (error) {
//   console.log('error :>> ', error);
// }

// // 实现obj的[Symbol.iterator]属性，将obj变成可遍历的
// obj[Symbol.iterator] = function () {
//   let i = 0;
//   return {
//     next: function () {
//       return i < 5 ? { value: i++, done: false } : { value: i++, done: true };
//     }
//   };
// }

// for (const it of obj) {
//   console.log('it :>> ', it);
// }

// // 循环[1, 2, 3]数组，输出4, 5, 6
// const arr = [1, 2, 3];
// // const arrIt = arr[Symbol.iterator]();
// // console.log('arrIt.next() :>> ', arrIt.next());
// // console.log('arrIt.next() :>> ', arrIt.next());
// // console.log('arrIt.next() :>> ', arrIt.next());


// arr[Symbol.iterator] = function () {
//   let i = 3;

//   return {
//     next: function () {
//       return { value: ++i, done: i > 6 ? true : false };
//     }
//   }
// }

// for (const it of arr) {
//   console.log('it :>> ', it);
// }


/*  循环[1, 2, 3]数组，输出a,b,c */
const arr = [1, 2, 3];

arr[Symbol.iterator] = function () {
  let str = 'abc';
  let i = 0;

  return {
    next: function () {
      return { value: str.charAt(i++) , done: i > str.length ? true : false };
    }
  }
}

for (const it of arr) {
  console.log('it :>> ', it);
}
