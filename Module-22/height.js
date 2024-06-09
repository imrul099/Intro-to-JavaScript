function getMaxNum(numbers){
    let max = numbers[0]
    for(number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max;
}


const heights = [34, 66, 21, 75, 32, 56,23, 71, 79];
const maxNum = getMaxNum(heights);
// console.log(maxNum);



function getMinNum(numbers){
    let min = numbers[0];
    for(number of numbers){
        if(number < min){
            min = number;
        }
    }
    return min;
}

const weight = [55, 44, 77, 32, 86, 21, 70, 25];
const minNum = getMinNum(weight);
console.log(minNum);