// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

//MY SOLUTION
var capitals = function (word) {
  let indexes = [];

  // convert the string to an array
  let myArr = word.split("");

  // get it't index and store it
  for (let chr of myArr)
    if (chr === chr.toUpperCase()) {
      indexes.push(myArr.indexOf(chr));
    }
  return indexes;
};
