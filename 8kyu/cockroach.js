// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// MY SOLUTION

function cockroachSpeed(s) {
  let kiloToCm = 100000;

  let cmPerHr = s * kiloToCm;

  return Math.floor((cmPerSec = cmPerHr / (60 * 60)));
}
