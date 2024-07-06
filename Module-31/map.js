const numbers = [4,5,6,7,8];

function doubleIt(num){
    console.log(num);
    return num *2;
}

const double2 = n => n*3;
//arrow function:
const result = numbers.map(doubleIt)






// const doubleIt = [];
// for(const num of numbers){
//     const double = num * 2;
//     doubleIt.push(double);
// }

// console.log(doubleIt)



const friends = ['tom', 'jhon', 'sumi', 'ratul'];

const lengths = friends.map(frd => frd.length);
console.log(lengths);

const firstLetter = friends.map(frend => frend[0]);
console.log(firstLetter);