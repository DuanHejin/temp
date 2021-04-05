// 嵌套promise的执行顺序

new Promise((resolve, reject) => {
  console.log('1'); // m1
  new Promise((resolve, reject) => {
    console.log('2'); // m2
    resolve();
  }).then(() => {
    console.log('2 then') // v1
  });
  resolve();
}).then(() => {
  console.log('1 then') // v2
})

// 结论：进入从外到里，resolve从里到外
