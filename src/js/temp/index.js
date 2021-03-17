// const obj = new Object;
// obj.name = 'obj';

// console.log('obj :>> ', obj);

// console.log('typeof obj :>> ', typeof obj);

// const res = Object.prototype.toString.call(obj);
// console.log('res :>> ', res);

// console.log('', Object.prototype.toString.call(obj));
// console.log('', Object.prototype.toString.call([]));
// console.log('', Object.prototype.toString.call(new Date));
// console.log('', Object.prototype.toString.call(RegExp()));

// console.log('', Object.prototype.toString.call(NaN));

// console.log('', Object.prototype.toString.call(undefined));
// console.log('', Object.prototype.toString.call(null));
// console.log('', Object.prototype.toString.call(new Boolean));
// console.log('', Object.prototype.toString.call(new Number));
// console.log('', Object.prototype.toString.call(new String));
// console.log('', Object.prototype.toString.call(Symbol()));

// console.log('typeof null :>> ', typeof null);
// console.log('typeof undefined :>> ', typeof undefined);

// console.log('null == undefined :>> ', null == undefined);
// console.log('null === undefined :>> ', null === undefined);
// console.log('void 0 === undefined :>> ', void 0 === undefined);

// const test = 341;
// console.log('isNaN(test) :>> ', isNaN(test));
// console.log('Number.isNaN(test) :>> ', Number.isNaN(test));
// console.log('Number.isInteger(test) :>> ', Number.isInteger(test));


// console.log('obj.valueOf() :>> ', obj.valueOf());
// console.log('obj.toString() :>> ', obj.toString());
// console.log('typeof obj.toString() :>> ', typeof obj.toString());
// console.log('[]+obj :>> ', []+obj);
// console.log('{}+[] :>> ', {}+[]);
// console.log('Number([]) :>> ', Number([]));


// console.log('[].toString() :>> ', [].toString());
// console.log('Object.prototype.toString.call([]) :>> ', Object.prototype.toString.call([]));
// console.log('[].toString === Array.prototype.toString :>> ', [].toString === Array.prototype.toString);
// console.log('[].toString === Object.prototype.toString :>> ', [].toString === Object.prototype.toString);
// console.log('Array.prototype.toString === Object.prototype.toString :>> ', Array.prototype.toString === Object.prototype.toString);



// // Symbol类型
// const obj = {
//   name: 'test',
//   // toString: function () {
//   //   return 'test';
//   // }
// };
// console.log('obj.toString() :>> ', obj.toString());
// console.log('typeof obj.toString() :>> ', typeof obj.toString());
// console.log('Object.prototype.toString.call(obj) :>> ', Object.prototype.toString.call(obj));
// console.log('obj.toString === Object.prototype.toString :>> ', obj.toString === Object.prototype.toString);

// const s = Symbol('aa');
// console.log('typeof s :>> ', typeof s);
// console.log('s.toString() :>> ', s.toString());
// console.log('typeof s.toString() :>> ', typeof s.toString());
// console.log('Object.prototype.toString.call(s) :>> ', Object.prototype.toString.call(s));
// console.log('s.toString === Object.prototype.toString :>> ', s.toString === Object.prototype.toString);
// console.log('s.toString === Array.prototype.toString :>> ', s.toString === Array.prototype.toString);
// console.log('s.toString === Symbol.prototype.toString :>> ', s.toString === Symbol.prototype.toString);

// const sObj = Symbol(obj);
// console.log('typeof sObj :>> ', typeof sObj);
// console.log('sObj.toString() :>> ', sObj.toString());
// console.log('typeof sObj.toString() :>> ', typeof sObj.toString());
// console.log('Object.prototype.toString.call(sObj) :>> ', Object.prototype.toString.call(sObj));

// const num = 1;
// num.toString();
// console.log('num.toString() :>> ', num.toString());

// const boolVal = new Boolean();
// console.log('boolVal :>> ', boolVal);
// console.log('boolVal.valueOf() :>> ', boolVal.valueOf());
// console.log('boolVal.toString() :>> ', boolVal.toString());

// const arrVal = ['1', '2', 'a', { name: 'test' }, ['a', 'b', 'c']];
// console.log('arrVal.toString() :>> ', arrVal.toString());

// const multiArr = [
//   [1, 2, 3],
//   ['a', 'b', 'c'],
//   [{ name: 'name1' }, { name: 'name2' }],
// ];
// const multiArrStr = multiArr.toString();
// console.log('multiArrStr :>> ', multiArrStr);
// console.log('typeof multiArrStr :>> ', typeof multiArrStr);
// const newArr = multiArrStr.split(',');
// console.log('newArr :>> ', newArr);

// console.log('[].toString() :>> ', [].toString());
// console.log('{}.toString() :>> ', {}.toString());
// console.log('[].valueOf() :>> ', [].valueOf());
// console.log('{}.valueOf() :>> ', {}.valueOf());

// const v = {} + [];
// console.log('v :>> ', v);
// console.log('{} + [] :>> ', {} + []);

// const val = ('0' + []) || 2;
// console.log('val :>> ', val);
// console.log('typeof val :>> ', typeof val);

// if ([]) {
//   console.log('true');
// } else {
//   console.log('false')
// }

// /* 其他类型转数字类型规则，用+进行强制转换 */
// console.log('+true :>> ', +true);
// console.log('+false :>> ', +false);
// console.log('+null :>> ', +null);
// console.log('+undefined :>> ', +undefined);
// console.log('+"0b10" :>> ', +"0b10");
// console.log('+"0" :>> ', +"0");
// console.log('+"1.23b" :>> ', +"1.23b");
// console.log('+new Date :>> ', +new Date);
// // console.log('+Symbol() :>> ', +Symbol()); // 会报错
// console.log('+{} :>> ', +{});
// console.log('+{valueOf() {return 2;}} :>> ', +{ valueOf() { return 2; } });
// console.log('+[] :>> ', +[]);
// console.log('+[1] :>> ', +[1]);
// console.log('+["1"] :>> ', +["1"]);
// console.log('+["a"] :>> ', +["a"]);
// console.log('+[1, 2] :>> ', +[1, 2]);


// /* 其他类型转字符串类型规则，用 ''+ 进行字符串拼接 */
// /* 隐式转换, Symbol类型会报错 */
// console.log('"" + true :>> ', "" + true);
// console.log('"" + false :>> ', "" + false);
// console.log('"" + null :>> ', "" + null);
// console.log('"" + undefined :>> ', "" + undefined);
// console.log('"" + 1 :>> ', "" + 1);
// console.log('"" + Number.MAX_SAFE_INTEGER :>> ', "" + Number.MAX_SAFE_INTEGER);
// console.log('"" + Number.MAX_VALUE :>> ', "" + Number.MAX_VALUE);
// console.log('"" + new Date() :>> ', "" + new Date());
// // console.log('"" + Symbol() :>> ', "" + Symbol()); // 隐式转换会报错 Cannot convert a Symbol value to a string
// console.log('"" + {} :>> ', "" + {});
// console.log('"" + {valueOf() {return 2;}} :>> ', "" + { valueOf() { return 2; } });
// console.log('"" + {toString() {return 2;}} :>> ', "" + { toString() { return 2; } });
// console.log('"" + [] :>> ', "" + []);
// console.log('"" + [1] :>> ', "" + [1]);
// console.log('"" + ["1"] :>> ', "" + ["1"]);
// console.log('"" + ["a"] :>> ', "" + ["a"]);
// console.log('"" + [1, 2] :>> ', "" + [1, 2]);

// /* 强制转换 */
// console.log('String(true) :>> ', String(true));
// console.log('String(false) :>> ', String(false));
// console.log('String(null) :>> ', String(null));
// console.log('String(undefined) :>> ', String(undefined));
// console.log('String(1) :>> ', String(1));
// console.log('String(Number.MAX_SAFE_INTEGER) :>> ', String(Number.MAX_SAFE_INTEGER));
// console.log('String(Number.MAX_VALUE) :>> ', String(Number.MAX_VALUE));
// console.log('String(new Date) :>> ', String(new Date));
// console.log('String(Symbol("symbol")) :>> ', String(Symbol("symbol"))); // 强制转换不会报错
// console.log('String({}) :>> ', String({}));
// console.log('String({valueOf() {return 2;}}) :>> ', String({ valueOf() { return 2; } }));
// console.log('String({toString() {return 2;}}) :>> ', String({ toString() { return 2; } }));
// console.log('{valueOf() {return 2;}}.toString() :>> ', { valueOf() { return 2; } }.toString());
// console.log('{toString() {return 2;}}.toString() :>> ', { toString() { return 2; } }.toString());
// console.log('String([]) :>> ', String([]));
// console.log('String([1]) :>> ', String([1]));
// console.log('String(["1"]) :>> ', String(["1"]));
// console.log('String(["a"]) :>> ', String(["a"]));
// console.log('String([1, 2]) :>> ', String([1, 2]));


/* ==操作符的强制类型转换规则 */
console.log('"1" == 1 :>> ', "1" == 1);
console.log('"" == false :>> ', "" == false);
console.log('[] == false :>> ', [] == false);
console.log('[0] == false :>> ', [0] == false);
console.log('parseInt("0.1b") == false :>> ', parseInt("0.1b") == false);
console.log('parseFloat("0.0b") == false :>> ', parseFloat("0.0b") == false);
if ("0") {
  console.log('true');
} else {
  console.log('false')
}

if ("0" == true) {
  console.log('true');
} else {
  console.log('false')
}

console.log('null == undefined :>> ', null == undefined);
console.log('{} == 1 :>> ', {} == 1);
console.log('{} == "[object Object]" :>> ', {} == "[object Object]");
console.log('{} == true :>> ', {} == true);
console.log('{ valueOf() { return false; } } == true :>> ', { valueOf() { return false; } } == true);
console.log('{ valueOf() { return this; }, toString() { return true; } } == true :>> ', { valueOf() { return this; }, toString() { return true; } } == true);
console.log('{ toString() { return true; } } == true :>> ', { toString() { return true; } } == true);
console.log('{ toString() { return "0b10"; } } == (1 + true) :>> ', { toString() { return "0b10"; } } == (1 + true));
console.log('"1615889496925" == new Date(1615889496925) :>> ', "1615889496925" == new Date(1615889496925));