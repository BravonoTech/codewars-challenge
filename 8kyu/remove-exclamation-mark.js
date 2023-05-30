// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// MY SOLUTION
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}
// MY SOLUTION 2
function removeExclamationMarks(s) {
  return s.split("!").join("");
}
