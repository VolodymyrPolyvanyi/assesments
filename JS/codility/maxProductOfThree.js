/* eslint-disable no-console */

function maxProductOfThree(A) {
    // let countNeg = 0;
    // let booleanMinus;
    // for(let i=0; i<A.length; i++){
    //     if (A[i] < 0) {
    //         countNeg += 1;
    //     }
    // }

    // if (countNeg % 2 === 0) {
    //     booleanMinus = false;
    // } else {
    //     booleanMinus = true;
    // }

    // const arrayMax = [-Infinity, -Infinity, -Infinity];
    // if (!booleanMinus) {
    //     const testArray = A.map(item => Math.abs(item));
    //     for(let i=0; i<testArray.length; i++){
    //         if (testArray[i] > Math.min(...arrayMax)) {
    //             const indexOfMin = arrayMax.indexOf(Math.min(...arrayMax));
    //             arrayMax[indexOfMin] = testArray[i];
    //         }
    //     }
    //     return arrayMax.reduce((mult, cur) => mult * cur);
    // } else {
    //     for(let i=0; i<A.length; i++){
    //         if (A[i] > Math.min(...arrayMax)) {
    //             const indexOfMin = arrayMax.indexOf(Math.min(...arrayMax));
    //             arrayMax[indexOfMin] = A[i];
    //         }
    //     }
    //     return arrayMax.reduce((mult, cur) => mult * cur);
    // }

    // sort
    // if (A[Length] > 0) {
    // сумма по модулю первых 2 эл и последних 2 эл
    // если -сумма > +суммы => A[0] * A[1] * A[i]
    // если -сумма > +суммы => A[0] * A[1] * A[i]
    // }

}

// const A = [-5, 5, -5, 4];
const A = [-3, 1, 2, -2, 5, 6];
console.log(maxProductOfThree(A))
