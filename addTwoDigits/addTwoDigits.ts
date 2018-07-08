function addTwoDigits(twoDigitNum: any): number {
  return twoDigitNum
    .toString()
    .split('')
    .reduce((a: string, b: string) => {
      return parseInt(a) + parseInt(b);
    });
}

console.log(addTwoDigits(29));
