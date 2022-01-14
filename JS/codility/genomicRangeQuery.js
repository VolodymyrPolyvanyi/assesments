/* eslint-disable no-console */

// A -> 1
// C -> 2
// G -> 3
// T -> 4

// S: string = CAGCCTA
// from P[number] to Q[number] find min value

// 1) for (P.length) {}
// 1.1) arr = S.slice(P[i], Q[i])
// 1.2) arr.sort()[0]

// 1) split
// 2)
function genomicRangeQuery(S, P, Q) {
  // const resultArray = [];
  // const stringArr = S.split('');
  // for (let i = 0; i < P.length; i++) {
  //   const letter = stringArr.slice(P[i], Q[i + 1]).sort()[0];
  //   if (letter === 'A') {
  //     resultArray.push(1);
  //   }
  //   if (letter === 'C') {
  //     resultArray.push(2);
  //   }
  //   if (letter === 'G') {
  //     resultArray.push(3);
  //   }
  //   if (letter === 'T') {
  //     resultArray.push(4);
  //   }
  // }
  // return resultArray;

  const res = [];
  const indexes = S.split("").reduce(
    (acc, ch, i) => {
      acc[ch].push(i);
      return acc;
    },
    { A: [], C: [], G: [], T: [] }
  );
  for (let i = 0; i < P.length; i++) {
    if (typeof indexes.A.find((ch) => P[i] <= ch && Q[i] >= ch) === "number") {
      res.push(1);
      continue;
    }
    if (typeof indexes.C.find((ch) => P[i] <= ch && Q[i] >= ch) === "number") {
      res.push(2);
      continue;
    }
    if (typeof indexes.G.find((ch) => P[i] <= ch && Q[i] >= ch) === "number") {
      res.push(3);
      continue;
    }
    if (typeof indexes.T.find((ch) => P[i] <= ch && Q[i] >= ch) === "number") {
      res.push(4);
      continue;
    }
  }
  return res;
}
// 1) stringArr[P[i]]

// 2 G C  C
// 5 T -  T
// 0 C A  A

const S = 'CAGCCTA';
const P = [2, 5, 0];
const Q = [4, 5, 6];
console.log(genomicRangeQuery(S, P, Q));

// console.log(S.slice(2, 4));
