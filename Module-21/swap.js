let a = 15;
let b = 20;

const temp = a;
a = b;
b = temp;
console.log(a, b);

//___________________________//

let x = 50;
let y = 100;

console.log(x, y);

[x, y] = [y, x];
console.log(x, y);