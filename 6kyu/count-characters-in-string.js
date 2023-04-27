// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}

//MY SOLUTION
function count(string) {
  let obj = {};

  // split the string and iterate
  let myStr = string.split("");

  // make each element a key and set 1 as initial value
  for (let element of myStr) {
    if (obj[element] === undefined) obj[element] = 1;
    else obj[element] += 1;
    // increment the value of each key as they reappear
  }

  return obj;
}
