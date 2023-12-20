// Your task is to write a function which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step.

// If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

const sequenceSum = (begin, end, step) => {
  // Understanding the question
  // I want a function that returns the sum of a sequence of integers.
  // Begin must not be greater than end
  // I cannot add end if, when we add step to begin, it doesn't equal end
  //
  // How to solve
  // 1. Return immediately if begin is greater than end
  // 3. Add step to begin and add step to the result until the result is equals to end
  // 4. We cannot allow result to be begger than end so we return the smallest sum

  if (begin > end) return 0;

  let result = 0;

  for (let i = begin; i <= end; i = i + step) {
    console.log(i);
    result += i;
  }

  return result;
};

console.log(sequenceSum(1, 5, 3));
