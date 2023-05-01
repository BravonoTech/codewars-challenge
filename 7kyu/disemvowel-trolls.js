// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
//MY SOLUTION
function disemvowel(str) {
  let vowels = "aeiouAEIOU".split("");
  return str
    .split(" ")
    .map((w) =>
      w
        .split("")
        .filter((l) => !vowels.includes(l))
        .join("")
    )
    .join(" ");
}

//MY SOLUTION 2
function disemvowel(str) {
  return str
    .split("")
    .filter(
      (a) =>
        a.toLowerCase() !== "a" &&
        a.toLowerCase() !== "e" &&
        a.toLowerCase() !== "i" &&
        a.toLowerCase() !== "o" &&
        a.toLowerCase() !== "u"
    )
    .join("");
}
