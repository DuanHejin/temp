function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
}

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    swap(array, i, minIndex);
  }
}

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let preIndex = i - 1;
    let current = array[i];
    while (preIndex >= 0 && array[preIndex] > current) {
      array[preIndex + 1] = array[preIndex];
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
}

function quickSort(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const partitionIndex = partition(array, left, right);
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
}

function partition(array, left, right) {
  const pivotIndex = left;
  let index = pivotIndex + 1;
  for (let i = index; i <= right.length; i++) {
    if (array[i] < array[pivotIndex]) {
      swap(array, i, index);
      index++;
    }
  }
  swap(array, pivotIndex, index - 1);
  return index - 1;
}

function quickSort2(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const partitionIndex = partition2(array, left, right);
    quickSort2(array, left, partitionIndex - 1);
    quickSort2(array, partitionIndex + 1, right);
  }
}

function partition2(array, left, right) {
  const pivot = array[left];
  let i = left;
  let j = right;
  while (i < j) {
    while (i < j && array[j] >= pivot) {
      j--;
    }
    array[i] = array[j];
    while (i < j && array[i] <= pivot) {
      i++;
    }
    array[j] = array[i];
  }
  array[j] = pivot;
  return j;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}