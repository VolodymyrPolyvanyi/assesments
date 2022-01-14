function maxCounters(N, A) {
  let i = 0;
  let findMax = 0;
  const res = A.reduce((resultingArr, currentElement) => {
    if (currentElement > N) {
      findMax = i;
    } else {
      const cur = resultingArr[currentElement - 1];
      resultingArr[currentElement - 1] = cur < findMax ? findMax + 1 : cur + 1;
      i = Math.max(i, resultingArr[currentElement - 1]);
    }
    return resultingArr;
  }, new Array(N).fill(0));
  //   O(N) ?
  return res.map(item => Math.max(item, findMax));
}

// 1) B = [0]; [0].length = N
// 2) if (A[i] > N) { B[each] = B.max } else { A[i] = j -> B[j-1] += 1 }
// 3) return B[]

const testArray = [3, 4, 4, 6, 1, 4, 4];
maxCounters(5, testArray);
