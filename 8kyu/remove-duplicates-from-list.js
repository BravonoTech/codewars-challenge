// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

// MY SOLUTION
function distinct(a) {
  let newArr = [];

  for (let n of a) if (!newArr.includes(n)) newArr.push(n);
  return newArr;
}
