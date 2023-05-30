// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// MY SOLUTION
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() == "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
}
// MY SOLUTION 2
function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

// MY SOLUTION 3
function areYouPlayingBanjo(name) {
  if (typeof name != "string") return;
  let myArray = name.split("");
  if (myArray[0].toUpperCase() === "R") {
    return `${name} plays banjo`;
  }
  return `${name} does not play banjo`;
}
