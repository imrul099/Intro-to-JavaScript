function isEven(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;
    }
}

const evenNum = isEven(34);
console.log(evenNum);
console.log(isEven(5));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

console.log(isOdd(6));
console.log(isOdd(3));