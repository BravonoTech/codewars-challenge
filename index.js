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
  if (text.length === 0) return [];

  return text.match(/[\w'*]+/g);
  // turn the string into an array of valid words
}

console.log(
  topThreeWords(`In' a village of La Mancha, the name of which I have no desire to call to
mind', there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutt'on, a salad on most
nights, scraps on Saturdays, lentils on Fridays, 'and a pigeon or so extra
on Sundays, made away with three-quarters of his income.`)
);
// console.log("Ahbideen".length);
