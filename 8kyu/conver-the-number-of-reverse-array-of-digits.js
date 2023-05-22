// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// MY SOUTION
function digitize(n) {
  let newArr = [];
  let makArr = n.toString().split("").reverse();

  for (let i = 0; i < makArr.length; i++) newArr.push(parseInt(makArr[i]));

  return newArr;
}

// MY SOLUTION 2
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}
