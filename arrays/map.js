//working with array
const numbers = [1,2,3,4,5];

function double(value, index, arr){
    return value * 2;
}

function multiDouble(value, index, arr){
    return value * index;
}

const numbersDouble = numbers.map( double );
const multi = numbers.map( multiDouble );

console.log( numbersDouble )
console.log( multi )


const strings = ['1', '2', '3'];
const nums = strings.map( Number ); //item => Number(item)
console.log( nums )

//working with objects
const products = [
    {
        title: 'samsung x',
        price: 12300,
        count: 34
    },
    {
        title: 'iphone y',
        price: 17000,
        count: 40
    },
    {
        title: 'xiomi y',
        price: 21000,
        count: 500
    }
];

const totalProductsValue = products.map( item=>  ({
    name: item.title,
    totalCount: item.price * item.count
})  );

console.log( totalProductsValue )