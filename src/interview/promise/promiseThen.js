return new Promise((resolve, reject) => {
  resolve(1);
}).then((result) => {
  console.log('result :>> ', result);
  return 2;
}).then((result) => {
  console.log('result :>> ', result);
  return 3;
}).catch((err) => {
  
});
