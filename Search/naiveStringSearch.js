function naiveStringSearch(word1, word2) {
  let counter = 0;
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i + j] !== word2[j]) {
        break;
      }
      if (j === word2.length - 1) {
        counter++;
      }
    }
  }
  return counter;
}

console.log(naiveStringSearch("wowomgzomg", "omg"));
