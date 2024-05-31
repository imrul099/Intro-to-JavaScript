// for(let i = 0; i < 30; i++){
    
//     if(i > 5){
//         break;
//     }
//     console.log(i);
// }
//_________ continue_________

let num = 0;

while(num <50){
    num++;
    if(num%5 !== 0){
        continue;
    }
    console.log(num)
}