// ==>> An unordered collection of key-value pairs.Each key-value pair is called a property.

//  ==>> An entity having state and behavior (properties and methods)

// Sntax...
const cat = {
    name : 'tribbers',
    age : 34
}

// ***** Object.create()

var orgObject = {
    campany : 'Abc Corp'
};

const employee = Object.create(orgObject);
console.log(employee);