var hour = 14;

if(hour >= 6 && hour <12){
    console.log('Good Morning')
}else{
    if(hour >= 12 && hour < 18){
        console.log('Good Afternoon')
    } else{
        console.log('good morning')
    }
}


//logical or

var x = 7;
if(x > 5 || x < 10){
    console.log('true')
}else{
    console.log('flase')
}

//ternary oparator

//condition ? true : false 
var y = 10
message = y > 5 ? 'bigger than 5' : 'less than 5'
console.log(message)



// When I Use Not Sign.........




var numbers = [33, 66, 24, 75, 34, 64, 44, 55, 88];
// var newNumbers = numbers.pop(2);
// console.log(numbers.slice(1, 5))
// console.log(numbers.length-1)

// console.log(numbers.splice(2, 2));
console.log(numbers.splice(2, 3, 40, 60));
console.log(numbers)
