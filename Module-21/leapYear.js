//SIMPLE LOGIC:

function isLeapYear(year){
    if(year%4=== 0){
        return true;
    }else{
        return false;
    }
}

console.log(isLeapYear(2200));









// Those year that is not divisible by 100 and if the year is divisible by 4; then it will be a leap year;

function isLeapYear(year){
    if(year % 100 !== 0   &&   year % 4 === 0){
        return true;
    }
    else{
        return false;
    }
}

const learYear = isLeapYear(2052);
console.log(learYear);