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

const sortObj = products.sort(sortingObj);

function sortingObj(a, b){
    return a.count - b.count;
}

console.log( sortObj )

//sorting numbers
const numbers = [5,3,67,2,34,5];
const sort = numbers.sort(sorting);

function sorting(a,b){
    // < 0, a comes first
    // > 0, b comes first
    // = 0, nothing will be changed
    return a-b;
}

