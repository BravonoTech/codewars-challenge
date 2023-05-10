// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// MY SOLUTION
function incrementString(strng) {
  let myNum = strng.match(/(0*)([1-9]+$)/);

  if (strng[strng.length - 1] === "0") return strng.replace(/0$/, "1");

  if (myNum === null) return strng + "1";

  let preZeros = myNum[1];

  if (myNum[0][0] !== "0") {
    return strng.replace(/(0*)([1-9]+$)/, Number(myNum[0]) + 1);
  }
  if (myNum[0][0] === "0" && Number(myNum[2].split("").pop()) < 9) {
    return strng.replace(
      /(0*)([1-9]+$)/,
      preZeros + String(Number(myNum[2]) + 1)
    );
  }
  if (myNum[0][0] === "0" && Number(myNum[2].split("").pop()) === 9) {
    return strng.replace(
      /(0*)([1-9]+$)/,
      preZeros.substr(0, preZeros.length - 1) + String(Number(myNum[2]) + 1)
    );
  }
}
