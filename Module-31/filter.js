// filter: filter selects elements based on a condition and returns an array with the elements that fulfilled the condition.   

const friends = ['toma', 'pranto', 'sobujhok', 'rahoman', 'rahul'];

const friend = friends.filter(frd => frd.length > 5);
//console.log(friend);


const players = [60, 53, 64, 54, 65, 75, 88, 56,97];
const player = players.filter(player => player <70);
//console.log(player);

const number = players.filter(c => c%2 == 1);
const number2 = players.filter(c => c%2 == 0);
console.log(number);
console.log(number2);