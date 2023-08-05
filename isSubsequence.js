/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

Examples:

isSubsequence('hello', 'hello world'); // true
isSubsequence('sing', 'sting'); // true
isSubsequence('abc', 'abracadabra'); // true
isSubsequence('abc', 'acb'); // false (order matters)
Your solution MUST have AT LEAST the following complexities:

Time Complexity - O(N + M)

Space Complexity - O(1)
*/

/* const isSubsequence = (str1, str2) => {
    let pointer = 0;
    let pointer2 = str.length;
    while(pointer < pointer) {
        if(str1 === str2.substring(pointer2)) {
            return true
        } else {
            
        }
    }
}; */

const isSubsequence = (str1, str2) => {
  let count = 0;
  for (let c of str2) {
    if (str1[count] === c) {
      count++;
    }
  }
  return str1.length === count;
};

console.log(isSubsequence("", "hello"));
console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
