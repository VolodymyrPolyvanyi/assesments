/* eslint-disable no-console */

function countDiv(A, B, K) {
  let firstElement;
  let lastElement;

  if (K === 0) {
    return 0;
  }

  // zero
  // if (A === 0 && B === 0) {
  //   return 1;
  // }

  if (A > 0 && K > B) {
    return 0;
  }

  firstElement =
    Math.abs(K) > Math.abs(A)
      ? A + (K % A) * Math.sign(A)
      : A + (A % K) * Math.sign(A);

  lastElement = B - (B % K);
  if (A === 0) {
    firstElement = 0;
  }
  if (B === 0) {
    lastElement = 0;
  }
  if (firstElement > lastElement) {
    firstElement = lastElement;
  }
  console.log(firstElement);
  console.log(lastElement);

  // to be continue
  if (lastElement - firstElement === 0 && A !== 0) {
    return 0 % A;
  }

  console.log(firstElement);
  console.log(lastElement);
  return (lastElement - firstElement) / Math.abs(K) + 1;

  // // positive
  // if (Math.sign(A) === 1 && Math.sign(B) === 1) {
  //   if (K > B) {
  //     return 0;
  //   }
  //   firstElement = K > A ? A + (K % A) : A + (A % K);
  //   lastElement = B - (B % K);
  //   console.log(firstElement);
  //   console.log(lastElement);
  //   return (lastElement - firstElement) / K + 1;
  // }

  // // negative
  // if (Math.sign(A) === -1 || Math.sign(B) === -1) {
  //   firstElement = A - (A % K);
  //   lastElement = B + (B % K);
  //   if (B === 0) {
  //     lastElement = B;
  //   }
  //   if (B > 0) {
  //     lastElement = B - (B % K);
  //   }
  //   console.log(firstElement);
  //   console.log(lastElement);
  //   return (lastElement - firstElement) / K + 1;
  // }

  // // positive from 0 to n
  // if (A === 0) {
  //   firstElement = A;
  // }
  // lastElement = B - (B % K);
  // console.log(firstElement);
  // console.log(lastElement);
  // return (lastElement - firstElement) / K + 1;
}

console.log(countDiv(10, 10, 5));
