// 如何实现add函数，得出以下结果
// add(2, 5); // 7
// add(2)(5); // 7


function add(...args) {
  if (args.length === 1) {
    return (b) => {
      return args[0] + b;
    }
  } else if (args.length === 2) {
    return args[0] + args[1];
  }
}

console.log(add(2, 5))
console.log(add(2)(5))
