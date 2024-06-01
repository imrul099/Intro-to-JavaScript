//string is immutable  --> not changeable
//array is mutable --> you can change the array elements.

// let str = "Mississippi";
// console.log(str.indexOf("i", 3));

const myObject = {
    a: 1,
    b: 2,
    c: 3
  };
  
  for (let prop in myObject) {
    console.log(myObject[prop]);
  }


  const x = ""
if(!x.length){
console.log("Hey")
}else{
console.log("Hi")
}

const str = "Hello";
str[0] = "h";
console.log(str);