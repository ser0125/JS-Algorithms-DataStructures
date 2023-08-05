/* power
Write a function called power which accepts a base and an exponent.
The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */
function power(base, num) {
  //base case would be 0
  if (num === 0) return 1;
  //2* power(3)
  //2* 2*power(2)
  //2*2*2*power(1)
  //2*2*2*2*power(0)
  return base * power(base, num - 1);
}
console.log(power(2, 0)); // 1
console.log(power(2, 2)); // 4
console.log(power(2, 4)); // 16
