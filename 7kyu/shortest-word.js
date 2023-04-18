// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//MY SOLUTION
function findShort(s) {
  //split the words with space
  let smallest = s.length;

  let myArr = s.split(" ");

  //get the length of the first item in array and store it somewhere
  for (let word of myArr) {
    if (word.length < smallest) smallest = word.length;
  }
  return smallest;

  //replace the value in the store with a small number
}
