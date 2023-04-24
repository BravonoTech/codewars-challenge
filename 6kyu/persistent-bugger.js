// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//MY SOLUTION 1
function persistence(num) {
  let myStr = num.toString();
  let myNum = myStr;
  let count = 0;

  while (myNum.length > 1) {
    myNum = myNum
      .split("")
      .reduce((a, b) => parseInt(a) * parseInt(b))
      .toString();
    count++;
  }
  return count;
}

//MY SOLUTION 2
function persistence(num) {
  let myStr = String(num).split("");
  let count = 0;
  //   //check if num is more than 1 digit.
  if (myStr.length === 1) return 0;

  //   //if not, turn it into a string and split it
  while (myStr.length > 1) {
    //     //multiple all digits in the array
    num = myStr.reduce((acc, curr) => {
      return Number(acc) * Number(curr);
    });

    myStr = String(num).split("");
    count += 1;
  }
  return count;
}

console.log(persistence(4));
