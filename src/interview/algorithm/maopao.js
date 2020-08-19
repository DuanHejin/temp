function maopao(arr) {
  const array = [].concat(arr);
  const length = array.length;
  let count = 0;
  
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i -1; j++) {
      const element = array[j];
      const nextElement = array[j+1];
      if (element > nextElement) {
        const temp = array[j+1];
        array[j+1] = array[j];
        array[j] = temp;
      }
      count ++;
    }
    console.log(`第${length > 9 && i < 9 ? " ": ""} ${i + 1} 次循环结果: `, array.join("   "));
  }
  // console.log('maopao sort count :', count);
}

function maopao2(arr) {
  if (!arr.length) {
    return arr;
  }
  const array = [].concat(arr);
  const length = array.length;
  let count = 0;
  for (let i = 0; i < length - 1; i++) {
    for (let j = 0; j < length - i - 1; j++) {
      const element = array[j];
      const nextElement = array[j + 1];
      if (element > nextElement) {
        array[j + 1] = element;
        array[j] = nextElement;
      }
      count ++;
    }
    console.log(`第${length > 9 && i < 9 ? " ": ""} ${i + 1} 次循环结果: `, array.join("   "));
  }
  console.log('maopao sort count :', count);
}

// 反向排序，最终排序后数组值由大到小
function maopaoReverse(arr) {
  if (!arr.length) {
    return arr;
  }
  const array = [].concat(arr);
  const length = array.length;
  let count = 0;
  for (let i = 0; i < length - 1; i++) {
    for (let j = length - 1; j > i; j--) {
      const element = array[j];
      const beforeElement = array[j - 1];
      if (element > beforeElement) {
        array[j - 1] = element;
        array[j] = beforeElement;
      }
      count++;
    }
    console.log(`第${length > 9 && i < 9 ? " ": ""} ${length - i} 次循环结果: `, array.join("   "));
  }
  console.log('maopao sort count :', count);
}

// 反向排序，最终排序后数组值由小到大
function maopaoReverse2(arr) {
  if (!arr.length) {
    return arr;
  }
  const array = [].concat(arr);
  const length = array.length;
  let count = 0;
  for (let i = 0; i < length - 1; i++) {
    for (let j = length - 1; j > i; j--) {
      const element = array[j];
      const beforeElement = array[j - 1];
      if (element < beforeElement) {
        array[j - 1] = element;
        array[j] = beforeElement;
      }
      count++;
    }
    console.log(`第${length > 9 && i < 9 ? " ": ""} ${length - i} 次循环结果: `, array.join("   "));
  }
  console.log('maopao sort count :', count);
}