// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

// MY SOLUTION
function doubleChar(str) {
  return str
    .split("")
    .map((c) => c + c)
    .join("");
}

// MY SOLUTION 2
function doubleChar(str) {
  let doubleStr = "";
  for (let i = 0; i < str.length; i++) {
    let duplicate = str[i] + str[i];
    doubleStr += duplicate;
  }
  return doubleStr;
}
