const computer = {
    brand: 'lenevo',
    price: '35000',
    processor: 'inter',
    sd: '512gp',
    monitor: 'acer'
}
//____Object___
//Provides functionality common to all JavaScript objects.
const keys = Object.keys(computer);  //Returns the names of the enumerable string properties and methods of an object.
const values = Object.values(computer); //Returns an array of values of the enumerable properties of an object
console.log(keys);
console.log(values);