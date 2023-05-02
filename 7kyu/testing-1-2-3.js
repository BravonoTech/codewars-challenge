// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

// MY SOLUTION
var number = function (array) {
  return array.map((s, i) => `${i + 1}: ${s}`);
};

// MY SOLUTION 2
var number = function (array) {
  let increment = 1;
  return array.map((item) => `${increment++}: ${item}`);
};
