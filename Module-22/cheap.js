const phones = [
    {name: 'samsung', price: 20000, camera: '12mp'},
    {name: 'apple', price: 120000, camera: '12mp'},
    {name: 'Xiomi', price: 40000, camera: '12mp'},
    {name: 'Nokia', price: 30000, camera: '12mp'},
    {name: 'walton', price: 19000, camera: '12mp'}
];

function getCheapestPhone(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone;
        }
    }
    return min;
}

const cheap = getCheapestPhone(phones);
// console.log(cheap);


//highest value;;;

function getHighestPhone(phones){
    let max = phones[0];
    for(const phone of phones){
        if(phone.price > max.price){
            max = phone;
        }
    }
    return max;
}

const highest = getHighestPhone(phones);
console.log(highest);