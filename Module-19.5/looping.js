/**
 * Looping Technique.
 * 1. for loop 
 * 2. while loop
 * 3. do while loop ==> ignore
 * 4. for of (array loop)
 * 5. for in (object loop)
 */

const friends = ['samia', 'susmita', 'sohagi', 'ratul', 'prova'];

for(const friend of friends){
    //console.log(friend)
}


for(let i = 0; i < friends.length; i++){
    console.log(i)
    console.log(friends[i])
}

const numbers = [345, 443, 764, 323, 634];

for(let i = 0; i < numbers.length; i ++){
    console.log(numbers[i])
}



// While Loop..........

const num = ['ss ghosh', 900, 'porimoni', 'abid ali', 350];

let i = 0;

while(i < num.length){
    console.log(num[i]);
    i++;
}