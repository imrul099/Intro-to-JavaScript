//data access..
const data = [{name: 'lenevo', price : 55000, location: 'Dhaka'}];
console.log(data[0].price);

const product = {
    count : 50000,
    data : [
        {id: 1, name : 'lenevo laptop', price : 30000},
        {id : 2, name: 'mackbook', price : 120000},
    ]
};
console.log(product.data[0].price);


const user = {
    id : 5001,
    name : 'shoriful raj',
    address : {
        street : {
            first : '54/2, uttor side', 
            second : 'porir bari', 
            third : 'badda'
        }
    }
}

const user2 = {
    id : 5002,
    name : 'poribager goli',
    address : {
        city : 'dhaka',
        county : 'bangladesh'
    }
};

console.log(user.address.street.third)
console.log(user2.address.street?.third)
