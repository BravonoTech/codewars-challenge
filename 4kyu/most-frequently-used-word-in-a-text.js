function topThreeWords(text) {
  let obj = {};

  let result = [];

  let newArr = [];

  if (text.length === 0) return [];

  // turn the string into an array of valid words
  let myArr = text.toLowerCase().match(/[\w'*]+/g);
  // count word occurence
  for (let item of myArr) {
    if (obj[item] === undefined) obj[item] = 1;
    else {
      obj[item] += 1;
    }
  }

  for (let e in obj) newArr.push({ key: e, value: obj[e] });
  let sorted = newArr.sort((a, b) => {
    if (a.value > b.value) {
      return -1;
    } else if (a.value < b.value) {
      return 1;
    }
    return 0;
  });

  if (Object.keys(sorted).length < 3) {
    for (let i = 0; i < 2; i++) {
      console.log("When", sorted[i]);
      // result.push(sorted[i].key);
    }
  }

  for (let i = 0; i < 3; i++) {
    console.log(sorted[i].key);
    result.push(sorted[i].key);
  }
  return result;
}

console.log(topThreeWords(`a a a  b`));

// let objs = { a: 1, b: 2 };

// for (let i in objs) console.log(objs[i]);
