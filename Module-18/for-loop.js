// for(let i = 0; i < 10; i++){
//     console.log(i)
// }


//______ For Loop Solving_______

// let sum = 0;

// for(let i = 11; i<=20; i++){
//     sum = sum + i;
    
// }
// console.log(sum)




// Decremental way for LOop...

// for(let i = 10; i >=0; i--){
//     console.log(i)
// }

// for(let num = 100; num >50; num--){
//     console.log(num)
// }


// for (let i = 0; i < 5; i+=3) {
//     console.log(i);
//   }

//   let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }


const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
    if (i == 5) {
     continue;
    }
    console.log(array[i]);
   }