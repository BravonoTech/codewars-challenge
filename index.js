decodeMorse = function (morseCode) {
  const morseCodeDict = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
  };

  newArr = morseCode.split("   ");
  console.log("My new Array", newArr);
  result = [];

  for (let item of newArr) {
    if (newArr.indexOf(item) != newArr.length - 1) {
      item.split(" ").forEach(function (code) {
        for (let key in morseCodeDict) {
          if (morseCodeDict[key] === code) {
            result.push(key);
          }
        }
      });
      result.push(" ");
    } else {
      item.split(" ").forEach(function (code) {
        for (let key in morseCodeDict) {
          if (morseCodeDict[key] === code) {
            result.push(key);
          }
        }
      });
    }
  }
  return `Hello${result.join("")}Bae`;
};

console.log(decodeMorse("   .... . -.--   "));
