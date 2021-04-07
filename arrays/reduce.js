const obj = [
    {
        name: 'laptop',
        price: 1000,
        count: 4
    },
    {
        name: 'book',
        price: 2000,
        count: 5
    },
    {
        name: 'phone',
        price: 3000,
        count: 6
    }
];

const sum = obj
        .filter(item => {return item.name !== 'book'})
        .reduce(callback, 0);

function callback(accum, item){
        return accum + item.count;
}

console.log( sum )



/*
const numbers = [0, 1, -1, 3, 4, 8];

const min = numbers.reduce(callback, 0);

function callback(accum, value){
    if( accum > value ){
        return value
    } else {
        return accum;
    }
}

console.log ( min );
*/

//max
// const numbers = [1,2,3,4,5, 10]
//
// const max = numbers.reduce(callback, -Infinity);
//
// function callback(accum, item){
//     if( accum < item ){
//         return item;
//     } else {
//         return accum;
//     }
// }

//console.log( max );



//
// const total = numbers.reduce( sum, 0);
//
// function sum(item, accum){
//     return accum + item;
// }
//
// console.log( total )