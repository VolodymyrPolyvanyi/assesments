function frogRiverOne(X, A) {
  const setTest = new Set();
  for (let i = 0; i < A.length; i++) {
    setTest.add(A[i]);
    if (setTest.size === X) {
      return i;
    }
  }
  return -1;
}

const testArray = [1, 3, 1, 4, 3, 5, 4];
frogRiverOne(5, testArray);
