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
console.log(sum,sum2)