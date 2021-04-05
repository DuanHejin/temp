// 微任务和宏任务的执行顺序

// console.log('start');

// setTimeout(() => {
//   console.log('timeout')
// }, 0)


// new Promise((resolve, reject) => {
//   console.log('promise');
//   resolve();
// }).then((res) => {
//   console.log('then 1');
// }).then((res) => {
//   console.log('then 2')
// });

// console.log('end');


console.log('script start')  // m1

async function async1() {
  await async2()
  console.log('async1 end') // v1
}
async function async2() {
  console.log('async2 end') // m2
}
async1()

setTimeout(function() {
  console.log('setTimeout') // h1
}, 0)

new Promise(resolve => {
  console.log('Promise') // m3
  resolve()
})
  .then(function() {
    console.log('promise1') // v2
  })
  .then(function() {
    console.log('promise2') // v3
  })

console.log('script end') // m4

// 预计：
// script start
// async2 end
// Promise
// script end
// async1 end
// promise1
// promise2
// setTimeout

// 结论：js执行栈中的同步方法执行完后，会去检查异步方法。
// 异步方法的检查顺序为：微任务->宏任务