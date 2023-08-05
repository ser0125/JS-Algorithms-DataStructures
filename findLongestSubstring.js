/* Write a function called findLongestSubstring,
which accepts a string and returns the length of the longest substring with all distinct characters.

findLongestSubstring('') // 0
findLongestSubstring('rithmschool') // 7
findLongestSubstring('thisisawesome') // 6
findLongestSubstring('thecatinthehat') // 7
findLongestSubstring('bbbbbb') // 1
findLongestSubstring('longestsubstring') // 8
findLongestSubstring('thisishowwedoit') // 6
Time Complexity - O(n) */

/* const findLongestSubstring = (str) => {
  //Creates two pointers one to move when is different one to move when is equal
  let start = 0;
  let end = 0;
  //creates a temp to store my last string
  let temp = "";
  let maxLength = 0;
  //loop the string
  while (end < str.length) {
    //validates if in my temp is the next char
    if (!temp.includes(str[end])) {
      //if no add ++end
      //rithms -- end:6
      //ms - end:6
      temp = temp + str[end];
      end++;
      //start -- 3
    } else {
      //if it is add ++start and compare my temp with previous one length
      maxLength = Math.max(maxLength, temp.length);
      temp = temp.slice(1);
      start++;
    }
  }
  return Math.max(maxLength, temp.length);
}; */

console.log(findLongestSubstring("rithmschool"));
console.log(findLongestSubstring("thisisawesome"));
console.log(findLongestSubstring("longestsubstring"));
console.log(findLongestSubstring("bbbbbb"));

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

1;
2;
3;
4;
5;
6;
7;
7;
7;
7;
7;
7;
7;
7;
7;
8;
8;
