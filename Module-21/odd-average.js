//function takes an array as parameter
// give me the average of the odd numbers in the array.


function oddNumbers(numbers){
    const odds = [];
    for(const number of numbers){
        if(number%2 === 1){
           odds.push(number); 
        }
    }

    //odds is the array that contains only the odd numbers.
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
        
    }
    const count = odds.length;
    const avg = sum / count;
    return avg;
}

const number = [33, 54, 23, 75, 12, 53, 21];
const avg = oddNumbers(number);
console.log('the avg:', avg);