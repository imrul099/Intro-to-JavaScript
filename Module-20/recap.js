function doubleIt (number){
    const doubled = number * 2;
    console.log(number, doubled);
}

console.log('how are ayou');
doubleIt(15);


//can use by variable .....
const num1 = doubleIt(50);

const num2 = 66;
doubleIt(num2);

//Type 3

function difference (num1, num2){
    const differ = num1 - num2;
    console.log(num1, num2, 'differene is', differ);
}

const fatherAge = 50;
const motherAge = 40;

difference(fatherAge, motherAge);