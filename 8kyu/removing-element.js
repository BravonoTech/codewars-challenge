// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// MY SOLUTION
function removeEveryOther(arr) {
  return arr.filter((a, i) => i % 2 == 0);
}
//  MY SOLUTION 2
function removeEveryOther(arr) {
  return arr.filter(function (value, index) {
    return index % 2 == 0;
  });
}
