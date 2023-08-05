function merge(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] <= arr2[j] || j >= arr2.length) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let leftSide = mergeSort(arr.slice(0, mid));
  let rightSide = mergeSort(arr.slice(mid));
  return merge(leftSide, rightSide);
}

//console.log(merge([1, 3, 7, 15], [2, 4, 6, 9, 16, 20]));
console.log(mergeSort([10, 24, 76, 73, 72, 1]));
