// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// MY SOLUTION
function highAndLow(numbers) {
  let maximum = Math.max(...numbers.split(" "));
  let minimum = Math.min(...numbers.split(" "));

  return maximum + " " + minimum;
}

// MY SOLUTION 2
function highAndLow(numbers) {
  let maximum = String(
    Math.max(...numbers.split(" ").map((num) => parseInt(num)))
  );
  let minimum = String(
    Math.min(...numbers.split(" ").map((num) => parseInt(num)))
  );

  return maximum + " " + minimum;
}
