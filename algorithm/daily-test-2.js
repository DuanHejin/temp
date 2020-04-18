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
    const current = array[i];
    let preIndex = i - 1;
    while (preIndex >= 0 && current < array[preIndex]) {
      array[preIndex + 1] = array[preInex];
      preIndex--;
    }
    array[preIndex + 1] = current;
  }
}


function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}