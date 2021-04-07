const numbers = [1,2,3,4,5,65,6,7,35,345,54,6,7];

function atLeast(number){
    return number < 10;
}

if( numbers.some( atLeast )) console.log( 'Есть числа меньше 10')
