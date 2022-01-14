function cyclicRotation(array, cycle) {
  while (cycle) {
    let intermediateArray = array.slice(); // remember array
    for (let i = 0; i < array.length; i++) {
      if (i !== 0) {
        array.splice(i, 1, intermediateArray[i - 1]);
      } else {
        array.splice(i, 1, intermediateArray[array.length - 1]);
      }
    }
    cycle--;
  }
}

const rotatingArray = [3, 4, 5, 6, 7];
cyclicRotation(rotatingArray, 6);

function func(array, shiftIndex) {
  const resultingArr = [...new Array(array.length)];
  array.forEach((item, index) => {
    resultingArr[(index + shiftIndex) % array.length] = item;
  });
  return resultingArr;
}
const rotatingSecondArray = [3, 4, 5, 6, 7];
func(rotatingSecondArray, 6);
