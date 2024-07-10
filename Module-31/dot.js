// Search to Google in Details about Dot notation vs Bracket notation.


function min(nums) { return Math.min(nums) }
console.log(min( [1,3,2 ]));

const [a, b] = [1,2,3,4,45,5]; 
console.log(a+b);


const {x, y, z} = {x: 1, y1: 2, z: 3};
console.log(y)

const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}

//const {price} = product
console.log(product.price);