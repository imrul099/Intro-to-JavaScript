//for of : array;
//for in : object;

const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    isNew: true
}

// console.log(mobile);
for(const prop in mobile){
    // console.log(prop);j
    //console.log(mobile[prop]);
}


const propertys = Object.keys(mobile);
console.log(propertys);

for(const property of propertys){
    //console.log(property);
    console.log('key:', property, '|', typeof mobile[property])
}