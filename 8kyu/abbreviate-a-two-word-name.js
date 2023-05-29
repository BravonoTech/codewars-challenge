// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// MY SOLUTION
function abbrevName(name) {
  let arr = name.split(" ");
  return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
}
// MY SOLUTION 2
function abbrevName(name) {
  let myArray = name.toUpperCase().split(" ");
  return `${myArray[0][0]}.${myArray[1][0]}`;
}

// MY SOLUTION 3

function abbrevName(name) {
  let toCapitals = name.toUpperCase();
  let a = toCapitals.split(" ");
  let b = a[0].split("");
  let c = a[1].split("");
  return b[0] + "." + c[0];
}
