function fillNumbers(n){
    return Array(n).fill(0).map((number, index, arr)=> {
        return index + 1;
    });
}

const res = fillNumbers(10);
console.log( res );

// const filled = new Array(4).fill("1");
// console.log( filled ) //[ '1', '1', '1', '1' ]
//
// const numbers = [1,2,3,4,5];
// console.log( numbers.fill("6", 3, 5)) //[ 1, 2, 3, '6', '6' ]



// const numbers = [1,2,3,4,5];
//
// console.log( numbers.fill("test", 1,4) )