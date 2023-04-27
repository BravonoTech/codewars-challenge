// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

//MY SOLUTION
function findUniq(arr) {
  // find the min and max
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // check which of those doesn't occur twice
  return arr.lastIndexOf(min) - arr.indexOf(min) > 0 ? max : min;
}
