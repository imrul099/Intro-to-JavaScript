const bilay = {
    catName : 'billu',
    age : '4',
    isMale : false,
    eat: 'mach',
    display : 'good',
    cat_food : 'vat torkari'
}

// console.log(bilay);

// bilay.age = 3;
// console.log(bilay.age);

// bilay.sound = 'mew mew';
// console.log(bilay);

//delete any object

// delete bilay.eat;
// console.log(bilay);

for( let key in bilay){
    console.log(bilay[key]);
}