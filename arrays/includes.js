const names = ['Alex', 'Kirill', 'Andrew', 'Boris'];

function ifIncludes(names, name){
    return names.includes(name, 2);
}

if( ifIncludes(names, 'Alex')) console.log( 'Есть имя ')
console.log( 'нет имени ')