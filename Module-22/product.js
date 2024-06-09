const products = [
    {name : 'shampoo', price: 340},
    {name : 'facewash', price: 240},
    {name : 'pest', price: 200},
    {name : 'brush', price: 210},
    {name : 'drink', price: 300}
];

function getShoppingTotal(products){
    let total = 0;
    for(const product of products){
        total = total + product.price;
    }
    return total;
}

const totalProduct = getShoppingTotal(products);
console.log(totalProduct);