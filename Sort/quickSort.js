function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function quickHelperFn(arr1, startIndex = 0, endIndex = arr1.length - 1) {
  let pivot = arr1[startIndex];
  let pivotIndex = startIndex;
  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (pivot > arr1[i]) {
      pivotIndex++;
      swap(arr1, pivotIndex, i);
    }
  }
  swap(arr1, startIndex, pivotIndex);
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (left < right) {
    let pivot = quickHelperFn(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

//console.log(merge([1, 3, 7, 15], [2, 4, 6, 9, 16, 20]));
console.log(quickSort([4, 6, 9, 1, 2, 5]));
// [1,2,4,6,9,5]
// [1,2,4,6,9,5]
// [1,2,4,5,9,6]
//console.log(quickHelperFn([10, 24, 76, 73, 72, 1]));
