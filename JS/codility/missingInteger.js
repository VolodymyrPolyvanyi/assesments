/* eslint-disable no-console */

function missingInteger(A) {
  const intermediateArray = A.reduce((acc, currentElement) => {
    if (currentElement > 0) {
      acc[currentElement - 1] = true;
    }
    return acc;
  }, []);
  const result = intermediateArray.findIndex(a => !a);
  return result === -1 ? intermediateArray.length + 1 : result + 1;
}

// const testArray = [1, 3, 6, 4, 1, 2];
// const testArray = [1, -3, 4, -5, 8];
const testArray = [-1, -2, -3];
console.log(missingInteger(testArray));
