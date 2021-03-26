/* 用forof迭代object */
const obj = {
  name: 'obj',
  value: 1,
  child: { name: 'child', value: 11 },
  arr: [1, 2, 3],
};

/* 默认情况下，object是不可迭代的，使用forof的时候，会报错 */
// for (const it of obj) {
//   console.log('it :>> ', it);
// }

/* 改写obj，增加迭代器属性 */
function *wrapObj(obj) {
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    yield [key, obj[key]];
  }
}

const newObj = wrapObj(obj);
for (const [key, value] of newObj) {
  // console.log('key, value, typeof value :>> ', key, value, typeof value);
  console.log('[[Class]] :>> ', Object.prototype.toString.call(value));
}