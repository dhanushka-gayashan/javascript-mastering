let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook)
console.log(myBook.title)
console.log(myBook.author)
console.log(myBook.pageCount)
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'
console.log(`${myBook.title} by ${myBook.author}`)


let person = {
    name: 'Dhanushka',
    age: 33,
    location: 'Auckland'
}
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age += 1
console.log(`${person.name} is ${person.age} and lives in ${person.location}`)