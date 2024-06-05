function tenTimes(number){
   const result = number * 10;
   return result; 
}

const output = tenTimes(6);
console.log('output', output);


function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(5, 10);
console.log(bill);


// direct method

function add(price1, price2){
    return price1 + price2;
}

const total = add(6, 6);
console.log(total);