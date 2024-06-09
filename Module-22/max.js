function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

const max1 = getMax(95, 66);
const max2 = getMax(55, 75);
const ultimateMax = getMax(max1, max2);
console.log(ultimateMax);
//console.log(max);


const jim = 300;
const kim = 499;
const rim = 299;

//using condition........
if(jim > kim && jim > rim){
    console.log('jim is the main boss');
}
else if(kim > rim && kim > jim){
    console.log('kim the main villain');
}else{
    console.log('rim the most dangerous');
}


//using function..........

function getMaxThree(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2
    }
    else{
        return num3
    }
}

const maxThree = getMaxThree(22, 44, 55);
console.log(maxThree);


// using max to get greatest value;

const max = Math.max(12, 44,64,21,64,75,22);
console.log(max);