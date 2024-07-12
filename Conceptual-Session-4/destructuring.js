const number = [2,3,4,5,6,7,8];

const [x,y,z] = number;


console.log(x, y, z);



//________________ Object Destrusturing ________________

const person = {
    name : 'hero alom',
    age : 34,
    phone : '029384793',
    address : 'bari dharra',
    p : [3,4,5,6]
}

const {phone, p: newArray, age} = person;
console.log(newArray)