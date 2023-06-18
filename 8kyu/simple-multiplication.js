// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// MY SOLUTION
function simpleMultiplication(n) {
  return n * (n % 2 === 0 ? 8 : 9);
}

// MY SOLUTION 2
function simpleMultiplication(number) {
  if (number % 2 === 0) return number * 8;
  else return number * 9;
}
