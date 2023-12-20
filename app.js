function divisor(number) {
  let myArr = [];
  for (let i = 1; i <= number; i++) {
    if (number % i == 0) myArr.push(i * i);
  }

  let reduced = myArr.reduce((a, b) => a + b);
  console.log(reduced % 1, reduced);
  if (Math.sqrt(reduced) % 1 == 0) return reduced;
}

console.log(divisor(287));
