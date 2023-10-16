// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// MY SOLUTION
function addBigNumbers(a, b) {
  // Split the numbers into arrays of digits.
  const aDigits = a.split("").reverse();
  const bDigits = b.split("").reverse();

  // Carry over the remainder from the previous addition.
  let carry = 0;

  // Add the digits of the two arrays, starting from the least significant digit.
  const result = [];
  for (let i = 0; i < aDigits.length || i < bDigits.length || carry; i++) {
    const digitSum =
      parseInt(aDigits[i] || 0) + parseInt(bDigits[i] || 0) + carry;
    carry = Math.floor(digitSum / 10);
    result.push(digitSum % 10);
  }

  // Reverse the result and return it as a string.
  return result.reverse().join("");
}

console.log(
  addBigNumbers("63829983432984289347293874", "90938498237058927340892374089")
);
