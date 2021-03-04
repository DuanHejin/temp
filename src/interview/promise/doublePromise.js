// 嵌套promise的执行顺序

new Promise((resolve, reject) => {
  console.log('1');
  new Promise((resolve, reject) => {
    console.log('2');
    resolve();
  }).then(() => {
    console.log('2 then')
  });
  resolve();
}).then(() => {
  console.log('1 then')
})

// 结论：进入从外到里，resolve从里到外
