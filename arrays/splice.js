const numbers = [1,2,3,4,5,6,7];
const newArr = ["test1", "test2"]

//удаляет 2 последних эл-та и заменяет их новым массивом
const removed = numbers.splice( numbers.length-2, 2 , ...newArr);

console.log( removed ) //[ 6, 7 ]
console.log( numbers ); //[ 1, 2, 3, 4, 5, 'test1', 'test2' ]
