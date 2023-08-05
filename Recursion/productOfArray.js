/* Write a function called productOfArray which takes in an array of numbers and returns the product of them all. */

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60

function productOfArray(numbers) {
  if (numbers.length === 1) return numbers.pop();
  return numbers.pop() * productOfArray(numbers);
}
