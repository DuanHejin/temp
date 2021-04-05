// 100个并发请求，每个请求耗时1s，使用浏览器并发出去，全部返回需要多少s

function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

const BASE_URL = 'http://localhost:3001/delayRes';

function getData(index) {
  return new Promise((resolve, reject) => {
    $.get(`${BASE_URL}?index=${index}`).then(resolve);
  });
  // return $.get('http://localhost:3001/delayRes');
  // $.get('http://localhost:3001/delayRes').then(res => {
  //   console.log('res :>> ', res);
  // })
}

const times = 18;
const arr = new Array(times).fill(null);
console.time(`${times} times xhr`);
Promise.all(arr.map((_, index) => getData(index))).then(results => {
  console.timeEnd(`${times} times xhr`);
  // console.log('results :>> ', results);
});