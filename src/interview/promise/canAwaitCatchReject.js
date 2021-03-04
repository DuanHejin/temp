// await能否拿到reject状态的值

/** 
 * 传入单数执行resolve，传入偶数执行reject
 */
mockPromise = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 1) {
      resolve('正常分支：是单数');
    } else {
      reject('异常分支：是偶数');
    }
  });
};

test = async (num) => {
  try {
    // const res = await mockPromise(num);
    // console.log('res :>> ', res);

    mockPromise(num).then((result) => {
      console.log('result :>> ', result);
    });
  } catch (error) {
    console.log('error :>> ', error);
  }
};

test(1); // res: >> 正常分支：是单数
test(2); // error: >> 异常分支：是偶数

// 结论：await只会拿到正常分支的值。异常的分支需要用try catch捕获



