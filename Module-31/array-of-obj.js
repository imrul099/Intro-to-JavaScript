const products = [
    {id : 1, name : 'lenevo', price : 65000},
    {id : 2, name : 'hp', price : 50000},
    {id : 3, name : 'mac', price : 165000}
];

//map: 
const element = products.map(product => product.name);
console.log(element);

const element2 = products.map(p => p.price);


//filter:
const expensive = products.filter(p => p.price> 50000);
console.log(expensive);