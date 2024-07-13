const number = [29, 38, 42, 54, 30, 32, 53, 75, 70];

//forEach, map, find, filter, reduce.


// 1. forEach

number.forEach(item => console.log(item));

number.forEach((num => {
    console.log('hello', num)
}));



// 2. map

const b = number.map(item => item+1);
console.log(number);
console.log(b);


//3. find : 

const x = number.find(item => item%5 === 0);
console.log(x);


// 3. filter()

const y = number.filter(item => item%2 === 0);
const y2 = number.filter(item => item>100);
console.log(y);
console.log(y2);

// 4. reduce().

const songkha = [1, 2, 3, 4, 5];

const sum = songkha.reduce((preValue, currentValue) => preValue + currentValue, 0);
console.log(sum);