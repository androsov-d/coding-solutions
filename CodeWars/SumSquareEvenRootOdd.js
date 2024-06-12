const sumSquareEvenRootOdd = nums => {
  const modifiedNums = nums.map(x => (x % 2 === 0) ? Math.pow(x,2) : Number(Math.sqrt(x).toFixed(2)));
  return modifiedNums.reduce((x,y) => x + y);
};
