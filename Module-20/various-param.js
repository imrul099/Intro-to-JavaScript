 function evenSizeStr(str){
    const size = str.length;
    console.log(str, size);
    if(size % 2 === 0){
        console.log('even number');
    }
    console.log('odd number')
 }

 evenSizeStr('Khulna');



 function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }else{
        const result = number * 3;
        return result;
    }
 }

 const theNumber = doubleOrTriple(25, true);
 console.log(theNumber);
 console.log(doubleOrTriple(5, false));


 //Array__________

 function numberOfElement(numbers){
    const len = numbers.length;
    return len;
 }

 const thelen = numberOfElement([3,5,7,8,3,7,76]);
 console.log(thelen);


 //Object

 function getAge(person){
    const get = person.age;
    return get;
 }

 
const person = {
    age : 33,
    location : 'Narail',
    city : 'dkaka'
}
const rahim = getAge(person);
console.log(rahim);