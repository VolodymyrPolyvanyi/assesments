function permMissingElem(A) {
  const B = A.reduce((accArray, curElement) => {
    accArray[curElement - 1] = true;

    return accArray;
  }, new Array(A.length + 1));
  return B.findIndex(e => !e) + 1;
}

const testArray = [2, 1, 3, 5, 4, 6, 7, 9];
permMissingElem(testArray);
