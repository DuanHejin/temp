return new Promise((resolve, reject) => {
  // resolve(1);
  reject('error');
}).then((result) => {
  console.log('result :>> ', result);
  // return 2;
}).then((result) => {
  console.log('result :>> ', result);
  // return 3;
}).catch((err) => {
  console.log('err :>> ', err);
  throw new TypeError('aaa');
}).then((result) => {
  console.log('result :>> ', result);
  // return 3;
}).catch((err) => {
  console.log('err :>> ', err);
});
