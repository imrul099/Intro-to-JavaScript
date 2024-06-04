const sentense = [10, 20, 30, 40, 50, 60]

// sentense.reverse();
// console.log(sentense);


//________________ Unshift_________________
const rev_numbers = [];

for(const num of sentense){
    console.log(num)
    rev_numbers.unshift(num) //Inserts new elements at the start of an array, and returns the new length of the array.
}

//console.log(rev_numbers);


//___________ for loop ________________

const num1 = [5, 10, 15, 20, 25, 30];

const reverNum1 = [];

for(let i = 0; i < num1.length; i++){
    const num = num1[i];
    reverNum1.unshift(num);
}
console.log(reverNum1)

//       TYPE 2____

const num2 = [2, 4, 6, 8, 10, 12];

const reverseNum2 = [];
for(i = num2.length -1; i >= 0; i--){
    //console.log(i);
    const num = num2[i];
    reverseNum2.push(num);
}

console.log(reverseNum2)