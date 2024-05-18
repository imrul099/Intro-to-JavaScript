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