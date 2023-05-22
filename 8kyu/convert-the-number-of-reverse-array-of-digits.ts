// MY SOLUTION
export const digitize = (n: number): number[] => {
  return n
    .toString()
    .split("")
    .map((a) => parseInt(a))
    .reverse();
};
