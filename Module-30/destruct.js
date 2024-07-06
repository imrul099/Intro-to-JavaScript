const actor = {
    name : 'ananto',
    age : 35,
    phone : 1761990398,
    money : 525254
}

// const name = actor.name;
// const age = actor.age;

//if right side is an object left side of districtring will be object as well.

//use propert name as a variable that contains the property value;
const {phone, age : boyos} = actor;


// console.log(phone);
// console.log(phone);
// console.log(phone);
// console.log(bo)
// console.log(age)
// console.log(age)
// console.log(age)

// array destrusturing.

const numbers  = [33,54];
const [first, second] = numbers;
const [x, y] = [12,23];

const arr = [25, 77, 100];
const [cake, pizza, fires] = arr;
console.log(cake);
console.log(arr);
console.log(pizza)


//function:advance;

function doubleThem(a, b){
    return [a*3, b*5];
}

const [prothom, ditiyo] = doubleThem(9,9);
//console.log(prothom, ditiyo)