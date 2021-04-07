const numbers = [1,2,-3,4,5,-65,6,7,35,345,54,6,7];

function findNegative(item, index, arr){
    if( item < 0 ) return arr[index]
}

const res = numbers.find( findNegative ); //-3

console.log( res )