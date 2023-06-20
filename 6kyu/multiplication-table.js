// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

// MY SOLUTION
multiplicationTable = function (size) {
  let myArr = [];

  // count from one to size
  for (let i = 1; i <= size; i++) {
    let newArr = [];

    // on each number, multiply it by 1, 2... until size
    for (let j = 1; j <= size; j++) {
      // add it to local array
      newArr.push(i * j);
    }

    // add the local array to global array
    myArr.push(newArr);
    // empty local array
    newArr = [];
  }
  return myArr;
};
