function areThereDuplicates(...elements) {
  let newObj = {};
  for(let char of elements) {
    if(newObj[char]) {
      return true;
    } else {
      newObj[char] = 1
    }
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true