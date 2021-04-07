//creating array with unique elements
const numbers = [3,3,3,5,6,7,23,4,55,55,3];

const uniq = Array.from( new Set(numbers) );

console.log( uniq )

// const arr = [1,23,4,5,5,6,7,8];
//
// const newArr = Array.from(arr, item => item * 2);
//
// console.log( newArr )