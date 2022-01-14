/* eslint-disable no-console */

function distinct(A) {
    const customSet = new Set(A);
    for(let i=0; i<A.length; i++){
        customSet.add(A[i]);
    }
    return customSet.size;
}

const A = [2, 1, 6, 2, 3, 1]
console.log(distinct(A))
