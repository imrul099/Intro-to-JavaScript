// 3 Different ways to reverse....

// Type 1....

let letter = 'how are you doing today';
let reverse = '';

for(let letterr of letter){
    reverse = letterr + reverse;
}

// console.log(reverse);

// type 2 (Shortcut).

const sentense = 'there are nothing to do';
const reverseSentence = sentense.split('').reverse().join('');
console.log(reverseSentence);