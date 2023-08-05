function collectOddValues(arr) {
  let result = [];
  function helper(inputArr) {
    if (!inputArr.length) {
      return;
    }
    if (inputArr[0] % 2 !== 0) {
      result.push(inputArr[0]);
    }
    return helper(inputArr.slice(1));
  }
  helper(arr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]));
