const myPet = {
    name : 'Travis',
    food : 'fish',
    color : 'white'
}

//my pet name is travis . His favourite food is fish. and his color is white;

const sentence = 'My pet name is ' + myPet.name + '. His favourite food is ' + myPet.food + '. and his color is ' +  myPet.color;

console.log(sentence);


// template string________

const sentencee = `My pet name is ${myPet.name}. His favourite food is ${myPet.food}.`

console.log(sentencee)