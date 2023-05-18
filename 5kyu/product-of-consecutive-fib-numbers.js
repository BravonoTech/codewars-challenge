// age)

// productFib(714) # should return (21, 34, true),
//                 # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

// productFib(800) # should return (34, 55, false),
//                 # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----
// productFib(714) # should return [21, 34, true],
// productFib(800) # should return [34, 55, false],
// -----
// productFib(714) # should return {21, 34, 1},
// productFib(800) # should return {34, 55, 0},
// -----
// productFib(714) # should return {21, 34, true},
// productFib(800) # should return {34, 55, false},
// Note:
// You can see examples for your language in "Sample Tests".

// MY SOLUTION
function productFib(prod) {
  // Create the fibonacci sequence until the last sequence is <= prod
  let fibonacci = [0, 1];

  for (let i = 0; i <= prod; i++) {
    if (fibonacci[i] * fibonacci[i + 1] > prod) {
      return [fibonacci[i], fibonacci[i + 1], false];
    }
    if (fibonacci[i] * fibonacci[i + 1] === prod) {
      return [fibonacci[i], fibonacci[i + 1], true];
    }
    fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
  }

  return fibonacci;
  // Iterate the array and check if opposing items equals prod when multiplied together

  // return immediatly if opposing numbers is greater than prod
}
