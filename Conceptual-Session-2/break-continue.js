//A 'break' statement can only be used within an enclosing iteration or switch statement

const nums = [23, 45, 64, 75, 66];

for(let item of nums){
    
    if(item % 75 === 0){
        break;
    }
    // console.log(item);
};


for(let num of nums){
    if(num%2 !==0){
        continue;
    }
    console.log(num);
}