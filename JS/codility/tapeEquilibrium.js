function tapeEquilibrium(A) {
  const sum = A.reduce((a, b) => a + b, 0);
  // eslint-disable-next-line no-console
  console.log(`Sum: ${sum}`);

  const resultObject = A.reduce(
    (acc, currentElement, index) => {
      if (index === A.length - 1) {
        return acc;
      }
      acc.currentSum += currentElement;

      const right = sum - acc.currentSum;
      const diff = Math.abs(acc.currentSum - right);
      if (diff < acc.result) {
        acc.result = diff;
      }
      return acc;
    },
    {
      currentSum: 0,
      result: Infinity,
    }
  );

  // eslint-disable-next-line no-console
  console.log(`Result: ${resultObject.result}`);
  return resultObject.result;
}

// sum A[]; min = 4 && i = 0 && result = 6;
// const testArray = [10, 1, 1, 100, 1];
// const testArray = [1, 2, 3, 4, 5];
const testArray = [-7, 1];
tapeEquilibrium(testArray);
