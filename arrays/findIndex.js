const persons = [
    {name: 'Alex', age: 13},
    {name: 'Kirill', age: 6},
    {name: 'Andrew', age: 36}
];

function myFind(person){
    return person.age === 36;
}

const res = persons.findIndex( myFind );
console.log( res ) //2