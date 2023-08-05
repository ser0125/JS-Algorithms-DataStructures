function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    //1
    let currentVal = arr[i];
    //j=0
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    //
    arr[j + 1] = currentVal;
  }

  return arr;
}

//console.log(selectionSort([1, 5, 4]));
//console.log(selectionSort([1, 5, 4, 7, 9, 3, 3]));
console.log(selectionSort([2, 1, 9, 76, 4]));
