async function async1() {
  console.log('async1 start'); // 主2
  await async2(); 
  console.log('async1 end'); // v1
}

async function async2() {
  console.log('async2'); // 主3
}
console.log('script start'); // 主1

setTimeout(() => {
  console.log('setTimeout'); // 宏1
}, 0);
async1();
new Promise((resolve, reject) => {
  console.log('promise1'); // 主4
  resolve()
}).then((result) => {
  console.log('promise2'); // v2
});

console.log('script end'); // 主5

// 预测
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
