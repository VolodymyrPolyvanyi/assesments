/* eslint-disable no-console */

function passingCars(A) {
  let pairs = 0;
  let j = 0;
  for (const currentElement of A) {
    if (currentElement === 0) {
      j += 1;
    } else {
      pairs += j;
    }
    if (pairs > 1000000000) {
      return -1;
    }
  }
  return pairs;
}
const testArray = [0, 1, 1, 1, 1];
console.log(passingCars(testArray));
