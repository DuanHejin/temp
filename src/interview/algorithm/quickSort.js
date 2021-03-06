function quickSort(array, left, right) {
  const length = array.length;
  const leftIndex = typeof left === "number" ? left : 0;
  const rightIndex = typeof right === "number" ? right : length - 1;

  if (leftIndex < rightIndex) {
    const partitionIndex = partition(array, leftIndex, rightIndex);
    quickSort(array, leftIndex, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, rightIndex);
  }
}

// function partition(array, left, right) {
//   const pivot = left;
//   let index = pivot + 1;
//   for (let i = index; i <= right; i++) {
//     if (array[i] < array[pivot]) {
//       swap(array, i, index);
//       index++;
//     }
//   }
//   swap(array, pivot, index - 1);
//   return index - 1;
// }

function partition(array, left, right) {
  let index = left + 1;
  for (let i = index; i <= right; i++) {
    if (array[i] < array[left]) {
      swap(array, i, index);
      index++;
    }
  }
  swap(array, left, index - 1);
  return index - 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort2(array, left = 0, right = array.length - 1) {
  if (left < right) {
    const partitionIndex = partition2(array, left, right);
    quickSort2(array, left, partitionIndex - 1);
    quickSort2(array, partitionIndex + 1, right);
  }
}

function partition2(array, left, right) {
  const pivot = array[right];
  let i = left;
  let j = right;
  while (i < j) {
    while (i < j && array[i] <= pivot) {
      i++;
    }
    array[j] = array[i];
    while (i < j && array[j] >= pivot) {
      j--;
    }
    array[i] = array[j];
  }
  array[i] = pivot;
  return i;
}
