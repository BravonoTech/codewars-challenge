function sumStr(a, b) {
  if (a.length != 0 && b.length != 0) return String(parseInt(a) + parseInt(b));

  if ((a + b).length == 0) return "0";

  return a + b;
}

console.log(Number(""));
