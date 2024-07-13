const number = [2,3,4,5,6,7,8];

const [x,y,z] = number;


console.log(x, y, z);



//________________ Object Destrusturing ________________

const person = {
    name : 'hero alom',
    age : 34,
    phone : '029384793',
    address : {
        zila : 'Dhaka',
        village : 'bola jabe na'
    },
    p : [3,4,5,6],
    
}

const {phone, p: newArray, age} = person;


const {address:{zila}} = person;
console.log(zila);