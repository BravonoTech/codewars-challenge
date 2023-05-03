// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// MY SOLUTION
function solution(string) {
  let newStr = [];
  string.split("").forEach((chr) => {
    if (chr !== chr.toUpperCase()) newStr.push(chr);
    else newStr.push(" " + chr);
  });
  return newStr.join("");
}

// MY SOLUTION 2
function solution(string) {
  // let newArray = [];
  // let splited = string.split('');
  // for (let item of splited)
  //   if (item === item.toUpperCase())
  //    newArray.push(` ${item}`)
  //   else
  //     newArray.push(item);
  // return newArray.join('');

  return string
    .split("")
    .map((s) => (s === s.toUpperCase() ? ` ${s}` : s))
    .join("");
}
