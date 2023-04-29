// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
//MY SOLUTION

function arrayDiff(array1, array2) {
  // iterate array a
  // in each iteration, check to see whether the element is in b
  // add it to a new arr if it is not

  let newArr = [];

  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i])) {
      newArr.push(array1[i]);
    }
  }
  return newArr;
}

console.log(arrayDiff([1, 2, 2], [1]));
