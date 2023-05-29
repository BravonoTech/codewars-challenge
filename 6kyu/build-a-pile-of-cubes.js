// Your task is to construct a building which will be a pile of n cube.
// The cube at the bottom will have a volume of n^3, the cube above will
// will have volume of (n - 1)^3 and so on until the top which will have
// a volume of 1^3.

// You are given the total volume m of the building. Being given m can you
// find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...)
// will be an interger m and you have to return the integer n such as
// n^3 + (n-1)^3 + (n-2)^3 + ... +1^3 = m if such a n exists or -1 if
// there is no such n.

// Eamples:

// findNb(1071225) --> 45

// findNb(91716553919377) --> -1
function findNb(m) {
  let count = 0;
  let total = 0;

  for (let i = 1; i <= m; i++) {
    total += i ** 3;
    count += 1;
    if (total === m) return count;
    if (total > m) return -1;
  }
  // I want to construct a building which has a cube with a volume of (n * n * n)

  // The next cube on it would be (n-1) * (n-1) * (n-1)

  // This pattern will continue until the final cube has a volume of (1)

  // So we are given the total of all the volumes which is (m)

  // So find the number of cubes stacked together

  // Our return value is the total number of cubes stacked

  // You don't want to count down from m to 1 because of time out, so return immediatly total
  // is greater than m.
}
