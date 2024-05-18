//***********ternary********* */  














//shortcut*****
//Logical Not Operator******************** 

const isLeader = true;
if(isLeader){
    console.log('leader can provided a vote')
}
else{
    console.log('vitore dhukte mana')
}


const isPassed = false;
if(!isPassed){
    console.log('kamon acho biyansab')
}else
{
    console.log('toke niye palay jabo')
}


//Double Not forcefully converts any value to the corresponding boolean value (true or false)

let x = 5;
 if (x < 10) { x = x + 3; } 
 else { x = x - 2; } 
 console.log(x);

 let result = 10 < '5'
 console.log(result)


 let score = 75;
let grade;
if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
}
console.log(grade);