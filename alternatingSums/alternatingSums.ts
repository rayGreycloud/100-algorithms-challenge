function alternatingSums(a: number[]): number[] {
  let teamOneSum = 0;
  let teamTwoSum = 0;

  a.map((weight: number, index: number) => {
    if (index % 2 !== 0) {
      teamTwoSum += weight;
    } else {
      teamOneSum += weight;
    }
  });

  return [teamOneSum, teamTwoSum];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
