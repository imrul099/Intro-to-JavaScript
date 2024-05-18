// ************If CONDITION**********

/**
 * if(condition){
    excute code if condition above is true.
}
else{
    excute code if the condition false.
}
 */

var biriyaniPrice = 350;
if(biriyaniPrice > 500){
    console.log('mama provide me some biriyani')
}

else{
    console.log('colo badam kahi')
}



const salary = 25000;
const isBcs = true;
const height = 60;

// if(salary > 20000 && height < 50){
//     console.log('colbe kono bapar na')
// }else
// {
//     console.log('bapi bari ja.')
// }

if(salary > 30000 || height > 30){
    console.log('aso baba kobul')
}








// ---------------- Complex Condition-----------------

if((salary > 30000 || isBcs == true) && height > 70){
    console.log('date fixed for get married')
}


if((salary > 30000 || isBcs == true) || height > 70){
    console.log('date fixed for get married')
}


//************Else if************ */

const price = 4000;

if(price >= 5000){
    //10% discount 
    const discount = price * 10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price >= 3000){
    const discount2 = price * 7/100;
    const payAmount2 = price - discount2;
    console.log(payAmount2);
}

else{
    console.log('nothing to say')
}




// const age = 50;
// const age = 18;
const age = 61;
const bergePrice = 500;

if(age <= 18){
    console.log('you can eat for free')
}
else if(age >= 60){
    const discount = bergePrice * 10/100;
    const payAmount = bergePrice - discount;
    console.log(payAmount);
}
else{
    console.log(bergePrice)
}