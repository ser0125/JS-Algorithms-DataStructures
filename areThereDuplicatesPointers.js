function areThereDuplicatesPointers(...elements) {
  if(elements.length <= 1) return false; 
  let pointer1 = 0
  let pointer2 = 1;
  elements.sort();
  while(pointer2 < elements.length ) {
    if(elements[pointer1] === elements[pointer2]) {
      return true;
    } else {
      pointer1 = pointer2;
      pointer2++;
    }
  }
  return false;
}

console.log(areThereDuplicatesPointers(1, 2, 3)) // false
console.log(areThereDuplicatesPointers(1, 2, 2)) // true
console.log(areThereDuplicatesPointers('a', 'b', 'c', 'a')) // true
console.log(areThereDuplicatesPointers(3,2,1,3)) // true