function adjacentElementsProduct(inputArray: number[]): number {
  // Initial value to first product
  let largestProduct = inputArray[0] * inputArray[1];

  // Iterate thru array - skip last item because nothing to its right
  for (let i = 1; i < inputArray.length - 1; i++) {
    // Multiply number by next number in array
    const product = inputArray[i] * inputArray[i + 1];
    // Update result if larger than previous
    largestProduct = largestProduct < product ? product : largestProduct;
  }
  // Return result
  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
