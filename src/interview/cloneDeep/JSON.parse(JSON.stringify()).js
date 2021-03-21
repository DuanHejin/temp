// JSON.parse(JSON.stringify())的弊端

const cloneDeep = (obj) => {
  return JSON.parse(JSON.stringify(obj));
}
const log = (name, obj) => {
  console.log(`cloneDeep(${name}) :>> `, obj, cloneDeep(obj));
}

// 1.obj中有Date对象的话，结果date将会是字符串形式
const test_date = {
  name: 'a',
  date: new Date(),
}
log('test_date', test_date);

// 2.obj中有RegExp，Error对象，结果将是空对象
const test_regexp_error = {
  name: 'a',
  regexp: new RegExp('\d'),
  error: new Error('error aaa'),
}
log('test_regexp_error', test_regexp_error);


// 3.obj中有函数，undefined，结果函数和undefined会丢失
const test_func_undefined = {
  name: 'a',
  func: function () {
    console.log('func');
  },
  undefinedVal: undefined,
}
log('test_func_undefined', test_func_undefined);

// 4.obj中有NaN，Infinity，-Infinity，结果将会变成null
const test_nan_infinity = {
  name: 'a',
  nanVal: NaN,
  infinityVal: Infinity,
  mInfinityVal: -Infinity,
}
log('test_nan_infinity', test_nan_infinity);

// 5.obj中的对象是构造函数生成的话，拷贝后，该对象的constructor将会丢失
const Person = function (age) {
  this.age = age;
}
const test_con = {
  name: 'a',
  conVal: new Person(11),
}
log('test_con', test_con);

// 6.obj中存在循环引用的话，这个方法无法实现深拷贝
