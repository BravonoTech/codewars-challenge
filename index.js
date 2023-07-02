// UNDERSTANDING THE QUESTION
// We will get a string of texts

// It is possible for the string to include punctuation and line-breaks

// I want to return top 3 of the most occuring words from highest to lowest

// The only special character allowed is the apostrophe. Everything is is a
// considered a whitespcace

// The matches should be case insensitive

// Top 2 and top 1 is allowed when we don't have enough words

// Can also return an empty array

function topThreeWords(text) {
  let obj = {};

  let result = [];

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

  if (Object.keys(obj).length < 3) {
    for (let i in obj) result.push(i);
  } else {
    let newArr = [];

    for (let e in obj) newArr.push({ key: e, value: obj[e] });
    newArr = newArr.sort((a, b) => {
      if (a.value < b.value) {
        return 1;
      } else if (a.value > b.value) {
        return -1;
      }
      return 0;
    });

    for (let j = 0; j < 3; j++) {
      result.push(newArr[j].key);
    }
  }

  return result;
}

console.log(topThreeWords(`//wont won't won't`));

// let objs = { a: 1, b: 2 };

// for (let i in objs) console.log(objs[i]);
