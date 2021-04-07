const numbers = [1,2,3,4,5,6,7];

const newArr = ["test1", "test2"]

const removed = numbers.splice( numbers.length-2, 2 , ...newArr);

console.log( removed )
console.log( numbers );