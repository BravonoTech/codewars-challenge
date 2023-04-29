// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.
//MY SOLUTION
function sumDigits(number) {
  if (number === +0) return number;

  let numStr = [];
  let myStr = String(number).split("");

  for (let i = 0; i < myStr.length; i++)
    if (myStr[i] !== "-") numStr.push(myStr[i]);

  return numStr.reduce((pre, cur) => Number(pre) + Number(cur));
}
