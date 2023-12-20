// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see "Sample Tests".

// Note
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function listSquared(m, n) {
  // Under standing the question...
  // I'm looking for a number between m & n
  // That when we sum the square of its divisors
  // We get a square number
  // How to solve this
  // 1. Iterate from n until m
  // 2. During Iteration, find the divisors of each number
  // 3. Check if it's summation is a square
  let myArr = [];
  for (let i = m; i <= n; i++) {
    let result = divisor(i);
    if (result != undefined) myArr.push([i, result]);
  }
  return myArr;

  function divisor(number) {
    let myArr = [];
    for (let i = 1; i <= number; i++) {
      if (number % i == 0) myArr.push(i * i);
    }

    let reduced = myArr.reduce((a, b) => a + b);
    if (Math.sqrt(reduced) % 1 == 0) return reduced;
  }
}

console.log(listSquared(1, 250));
