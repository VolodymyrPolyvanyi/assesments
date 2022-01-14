/* eslint-disable no-console */

function discIntersection(A) {
    console.log(A);
    // const minArray = A.map((item, index) => index - item);
    // console.log(minArray);
    // const maxArray = A.map((item, index) => index + item);
    // console.log(maxArray);

    // let intersection = 0;
    // return maxArray.reduce(item => {
    //     for (let i=0; i<maxArray.length; i++) {
    //         if (item > minArray[i+1]) {
    //             intersection += 1;
    //         }
    //     }
    //     return intersection;
    // });

    A.sort((a) => a.index - a.value);
    console.log(A);
}

const A = [1, 5, 2, 1, 4, 0];
console.log(discIntersection(A));
