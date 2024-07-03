const max = Math.max(6, 23, 45, 33, 53);
const numbers = [3, 5, 3, 64, 75,2];

const arrayMax = Math.max(...numbers);
console.log(...numbers)
console.log(arrayMax);


// ----------Spreading Array ----------
//use spread operator to copy..
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray]
console.log(copiedArray);

// Conbining Arrays:

const array1 = [1, 2, 4];
const array2 = [5,6, 7];
const combine = [...array1, ...array2];
console.log(combine);


// Adding Elements:
const namb = [1,2,4];
const newNamb = [0, ...namb, 5];
console.log(newNamb);


// -----------Spreading in Object------------


// coping objects:
const orginalObj = {a:1, b:2};
const copiedObj = {...orginalObj};
console.log(copiedObj);
// Output: { a: 1, b: 2 }

//Merging Object:
const person = {name: 'rahul', roll: 3};
const person2 = {class: 11, dept: 'business'};
const merge = {...person, ...person2};
console.log(merge);

// Overriding Properties:
// when merging objects, later properties will overwrite earlier ones.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject);
 // Output: { a: 1, b: 3, c: 4 }



//  ----------------- Function Arguments------------

//The spread operator can be used to pass an array as individual arguments to a function.

const song = [1,2,3];

const sum = (a, b, c) => a + b+ c;
console.log(sum(...song));