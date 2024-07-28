// function outerFunction(){
//     let a = 1;
//     return function innerFunction(){
//         a++
//         console.log('value of inner', a);
//     }
// };
// outerFunction(2);


// akta function er moddeh arekta function thakbe, jei function tar kaj hobe tar bahirer, j tar parent function


const outFunction = () => {
    let count = 0;
    
    const inner = () => {
        count ++;
        console.log('count: ', count);
    };
    return inner;
};

const x = outFunction()
x()
x()
x()
x()
