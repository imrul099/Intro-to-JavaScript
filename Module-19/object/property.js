// A property is an attribute of an object or an aspect of its behavior. For example, properties of a document include its name, its content, and its save status, and whether change tracking is turned on. To change the characteristics of an object, you change the values of its properties.

const person = {
    name: 'ahmend jannat',
    age: 25,
    salary: 2500,
    profession: 'developer',
    married: true,
    'fav foods': ['vat', 'mach', 'aluvorta', 'sakhvaji', 'dal']
}
// dot Notation_________

console.log(person.age);

const getElemet = person.name;
console.log(getElemet)

// bracket notation_________

console.log(person['married']);
console.log(person["fav foods"])
