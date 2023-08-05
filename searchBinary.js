const search = (arr, num) => {
  let min = 0;
  let max = arr.length - 1; //5
  while (min <= max) {
    //4<5 //4=4
    let middle = Math.floor((min + max) / 2); //2 //4 //4
    let currentElement = arr[middle]; //3 //5 //5
    if (currentElement < num) {
      //true
      min = middle + 1; //4
    } else if (currentElement > num) {
      //true
      max = middle - 1; //4
    } else {
      return middle;
    }
  }
  return -1;
};

//console.log(search([1, 2, 3, 4, 5, 6], 6));
console.log(search([1, 2, 3, 4, 5, 6], 4));
