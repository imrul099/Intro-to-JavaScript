//write a function to give me the sum of all numbers in an array;
//declare a function
//call check whether the finction is called properly.
//set a perameter(s)
//step 4. pas the parameter and cheak whether parameter is passed in a proper format;



function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;
    }
    return sum;
}

const numbs = [2, 2, 2, 2, 3];
// const total = sumOfNumbers(numbs);
// console.log(total);



//create function that will return only the even numbers

function evenNumberOnly(numbers){
    const evenNum = [];
   for(const number of numbers){
    if(number % 2 === 0){
        console.log(number)
        evenNum.push(number);
    }
   }
   return evenNum;
}

const numb = [22, 75,99,32,98,64];
// const evens = evenNumberOnly(numb);
// console.log(evens);


function sumOfEvenNumber(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number%2===0){
            console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const num1 = [5,10,15,20,230];
const evenSum = sumOfEvenNumber(num1);
console.log('total sum even number:', evenSum);