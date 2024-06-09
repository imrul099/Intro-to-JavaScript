const shopping = [
    {name : 'shampoo', price: 340, quantity: 2},
    {name : 'facewash', price: 240, quantity: 3},
    {name : 'pest', price: 200, quantity: 2},
    {name : 'brush', price: 60, quantity: 4},
    {name : 'drink', price: 300, quantity: 3}
];

function cartTotal(products){
    let cost = 0;
    for(const product of products){
        const thisProductCost = product.price * product.quantity;

        cost = cost + thisProductCost;
        
    }
    return cost;
}

const shoppingCost = cartTotal(shopping);
console.log(shoppingCost);