function topThreeWords(text) {
  let obj = {};
  let result = [];
  let newArr = [];

  if (text.length === 0) return [];

  // turn the string into an array of valid words
  let myArr = text.toLowerCase().match(/[\w'*]+/g);

  // count word occurence
  for (let i = 0; i < myArr.length; i++) {
    if (obj[myArr[i]] === undefined) obj[myArr[i]] = 1;
    else {
      obj[myArr[i]] += 1;
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
      if (sorted[i] !== undefined) {
        result.push(sorted[i].key);
      }
    }
    return result;
  }

  for (let i = 0; i < 3; i++) {
    if (sorted[i] !== undefined) {
      result.push(sorted[i].key);
    }
  }
  return result;
}

console.log(topThreeWords(`a a a  b c c c`));

// let objs = { a: 1, b: 2 };

// for (let i in objs) console.log(objs[i]);
