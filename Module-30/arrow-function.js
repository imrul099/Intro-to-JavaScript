 // ARROW  Function: Arrow function is one of the features introduced in the ES6 version of Javascript. It allows you to create functions in a cleaner way campared to regular functions.
 
 // function declaraiton:
 function add(a, b){
    return a + b;
 }


//  function expretion
const add2 = function(a, b){
    return a + b;
};


//arrow function:

const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3) => num1 * num2 * num3;



const sum = add3(5, 5);
const sum2 = add4(2, 3, 4);
//console.log(sum,sum2);


const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;
//console.log(multiply(3,3,3));

//Single or one parameter: I can use braket or no bracet;
const getAge = (person) => person.name;
const imrul = {name: 'molla', age: 23};
const needAge = getAge(imrul);
//console.log(needAge);


const getThird = numbers => numbers[2];
const third = getThird([77,33,72, 74]);
console.log(third);


//No parameter:
const getPI = () => Math.PI;
console.log(getPI())


//large arrow function: if you want to get anything returned from this function. then you hav eto use the return keyword.
const doMath = (x,y,z) => {
    const sum = x + y + z;
    const mult = x * y * z;
    const result = sum + mult;
    return result;
}