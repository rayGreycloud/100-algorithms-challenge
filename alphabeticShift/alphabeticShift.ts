function alphabeticShift(inputString: string): string {
  let charCodes = [];

  for (let i = 0; i < inputString.length; i++) {
    const charCode = inputString.charCodeAt(i);

    charCodes.push(charCode === 122 ? 97 : charCode + 1);
  }

  return String.fromCharCode(...charCodes);
}

console.log(alphabeticShift('crazy'));
