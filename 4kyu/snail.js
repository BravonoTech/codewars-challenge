// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

// MY SOLUTION
snail = function (arr) {
  let finalArr = [];

  while (arr.length) {
    finalArr.push(...arr.shift());

    for (let i = 0; i < arr.length; i++) {
      finalArr.push(arr[i].pop());
    }

    finalArr.push(...(arr.pop() || []).reverse());

    for (let i = arr.length - 1; i >= 0; i--) finalArr.push(arr[i].shift());
  }

  return finalArr;
};

// MY SOLUTION 2
snail = function (array) {
  let result = [];
  let store = [];

  while (array.length) {
    for (let item of array) {
      if (array.indexOf(item) === 0) {
        result.push(...item);
      } else if (array.indexOf(item) !== array.length - 1) {
        result.push(item.pop());
        store.push(item.shift());
      } else {
        result.push(...array[array.length - 1].reverse());
      }
    }

    if (store.length) {
      result.push(...store.reverse());
    }
    store = [];
    array.shift();
    array.pop();
  }
  return result;
};
