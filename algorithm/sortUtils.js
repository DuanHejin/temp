(function (scope, key) {
  /**
   * 冒泡排序
   * @param {Array<number>} array 
   */
  function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        const element = array[j];
        const nextElement = array[j + 1];
        if (element > nextElement) {
          swap(array, j, j + 1);
        }
      }
    }
  }

  /**
   * 选择排序 
   * @param {Array<number>} array 
   */
  function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
      let min = array[i];
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        const nextElement = array[j];
        if (min > nextElement) {
          min = nextElement;
          minIndex = j;
        }
      }
      swap(array, i, minIndex);
    }
  }

  /**
   * 插入排序
   * @param {Array<number>} array 
   */
  function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      const current = array[i];
      let preIndex = i - 1;
      while (preIndex >= 0 && current < array[preIndex]) {
        array[preIndex + 1] = array[preIndex];
        preIndex--;
      }
      array[preIndex + 1] = current;
    }
  }

  /**
   * 快速排序
   * @param {Array<number>} array 
   * @param {number} left 
   * @param {number} right 
   */
  function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
      const partitionIndex = partition(array, left, right);
      quickSort(array, left, partitionIndex - 1);
      quickSort(array, partitionIndex + 1, right);
    }
  }

  function partition(array, left, right) {
    const pivot = array[left];
    let i = left;
    let j = right;
    while (i < j) {
      while (array[i] <= pivot) {
        i++;
      }
      array[j] = array[i];
      while (array[j] >= pivot) {
        j--;
      }
      array[i] = array[j];
    }
    array[j] = pivot;
  }

  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  scope[key] = {
    bubbleSort,
    selectionSort,
    insertionSort,
    quickSort
  }
})(window, "SortUtils")