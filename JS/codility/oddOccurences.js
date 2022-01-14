function oddOccurrences(array) {
  if (array.length % 2) {
    const unpairedElement = array.reduce(
      (acc, currentElement) => {
        if (!(currentElement in acc.elementCounted)) {
          (acc.elementCounted[currentElement] = true),
            (acc.resultingElement = currentElement);
        } else {
          delete acc.elementCounted[currentElement];
        }
        return acc;
      },
      {
        elementCounted: {},
        resultingElement: null,
      }
    );
    return (unpairedElement.resultingElement = Object.keys(
      unpairedElement.elementCounted
    )[0]);
  } else {
    return null;
  }
}

const arrayTest = [2, 1, 4, 4, 2, 4, 4, 2, 2];
oddOccurrences(arrayTest);
