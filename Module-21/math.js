//____________Math__________

//---> An intrinsic object that provides basic mathematics functionality and constants.


// get min number using Math..
const min = Math.min(44, 53, 65, 23, 77);
console.log(min);

const max = Math.max(5,22, 64,77,311);
console.log(max);


//#3. Pi. This is the ratio of the circumference of a circle to its diameter.
console.log(Math.PI)

//#4. PI -->> Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.
console.log(Math.abs);


//#5. Floor== Returns the greatest integer less than or equal to its numeric argument.

console.log(Math.floor(2.5));



//#6. Round --- >> Returns a supplied numeric expression rounded to the nearest integer.

console.log(Math.round(2.75));

// 7. ceil -->> Returns the smallest integer greater than or equal to its numeric argument.
console.log(Math.ceil(2.45));

//RANDOM ...
// Returns a pseudorandom number between 0 and 1.
console.log(Math.random()*18);
console.log(Math.round(Math.random()*5))