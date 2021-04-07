const numbers = [1,2,3,4,5,65,6,7,35,345,54,6,7];

function bigEnough(number){
    return number > 10;
}

if ( !numbers.every(bigEnough) ) console.log( 'Есть числа меньше 10')