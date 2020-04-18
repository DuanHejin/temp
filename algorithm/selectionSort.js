function selectionSort(arr) {
  const logger = new LoggerUtils();
  if (!arr.length) {
    return arr;
  }
  const array = [].concat(arr);
  const length = array.length;

  for (let i = 0; i < length; i++) {
    let min = array[i];
    let minIndex = i;
    for (let j = i; j < length; j++) {
      const nextElement = array[j + 1];
      if (min > nextElement) {
        min = nextElement;
        minIndex = j + 1;
      }
    }
    swap(array, i, minIndex)
    logger.log(array);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}