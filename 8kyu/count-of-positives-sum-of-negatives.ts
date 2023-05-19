// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// MY SOLUTION
export function countPositivesSumNegatives(input: any): number[] {
  //   throw new Error('The method or operation is not implemented.');
  if (input == null || input.length == 0) return [];

  let count = 0;
  let sum = 0;

  for (let e of input) {
    if (e < 0) sum += e;
    if (e > 0) count += 1;
  }

  return [count, sum];
}
