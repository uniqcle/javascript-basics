const numbers = [1, 2, 4, 6, 12, 11, 20, 27, 22, 24];

function isOdd(number){
    return number % 2 !== 0;
}

const odd = numbers.filter( isOdd );

//Убираем дублирующие элементы
const nums = [1,2,3,3,4,5,6,6];
const newNums = nums.filter( (number, index, arr) => {
    return arr.indexOf(number) === index
})

console.log( newNums )


const persons = [
    {
        name: 'Alex',
        age: 13
    },
    {
        name: 'Kirill',
        age: 6
    },
    {
        name: 'Andrew',
        age: 36
    }
];

const adultPersons = persons.filter( person=>{
    return person.age < 14
});

console.log( adultPersons );
