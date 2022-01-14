/* eslint-disable no-console */

function permCheck(A) {
  const potentialPerm = [];
  for (let i = 0; i < A.length; i++) {
    if (potentialPerm[A[i] - 1] === true) {
      return 0;
    }
    potentialPerm[A[i] - 1] = true;
  }
  if (potentialPerm.includes(undefined)) {
    return 0;
  }
  return 1;
}

const testArray = [4, 1, 3];
console.log(permCheck(testArray));
