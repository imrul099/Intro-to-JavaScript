let numbers = [34, 65, 23, 53, 22, 88, 21];
let oddNum = 0;
let evenNum = 0;

for(let i = 0; i <numbers.length; i++){
    const x = numbers[i];

    if(x % 2 ===1){
        oddNum = oddNum + x; 
     }
     else{
         evenNum = evenNum + x;
     }
     
}


console.log(oddNum);
console.log(evenNum);