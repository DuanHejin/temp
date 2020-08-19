function insertionSort(arr) {
  if (!arr.length) {
    return arr;
  }
  const array = [].concat(arr);
  const resultArr = [].concat([array[0]]);
  
  for (let i = 1; i < array.length; i++) {
    const curElement = array[i];
    for (let j = resultArr.length - 1; j >= 0; j--) {
      const sortedElement = resultArr[j];
      if (curElement > sortedElement) {
        resultArr.splice(j+1, 0, curElement);
        break;
      } else if (j == 0) {
        resultArr.splice(0, 0, curElement);
      }
    }
    console.log(`第${length > 9 && i < 9 ? " ": ""} ${i + 1} 次循环结果: `, resultArr.join("   "));
  }
}

function insertionSort2(arr) {
  const logger = new LoggerUtils();
  if (!arr.length) {
    return arr;
  }
  const array = [].concat(arr);
  const length = array.length;

  for (let i = 1; i < length; i++) {
    let current = array[i];
    let preIndex = i - 1;
    while(preIndex >= 0 && current < array[preIndex]) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    array[preIndex + 1] = current;
    logger.log(array);
  }
}

function swap(arr, i, j){
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}