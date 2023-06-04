// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// MY SOLUTION
function stray(numbers) {
  for (let i of numbers)
    if (numbers.indexOf(i) === numbers.lastIndexOf(i)) return i;
}

// MY SOLUTION 2
function stray(numbers) {
  for (let i of numbers)
    if (numbers.indexOf(i) === numbers.lastIndexOf(i)) return i;
}
