// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

//MY SOLUTION

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

//MY SOLUTION 2
function removeUrlAnchor(url) {
  let myArr = url.split("");

  if (myArr.indexOf("#") !== -1) {
    myArr.splice(myArr.indexOf("#"));
    return myArr.join("");
  }

  return myArr.join("");
}
