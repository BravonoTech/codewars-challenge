// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// MY SOLUTION
function removeChar(str) {
  let newArr = str.split("");
  newArr.shift();
  newArr.pop();
  return newArr.join("");
}

// MY SOLUTION 2
function removeChar(str) {
  //You got this!
  let array = str.split("");
  array.pop();
  array.shift();
  return array.join("");
}
