// Default: if value is not provided, take this as a default.

// if i want to add / minus then the default value is 0;
// if i want to multiply or divided then the default value is 1;

//For array: default value -->> number = []
//For Object: default value -->> person = {}

function add(num1=6, num2 = 4){ //default value;
    const result = num1+ num2;
    console.log(result);
}
add();


function fullName(first, last = '' ){// default value: ' '
    const full = first + ' ' + last;
    console.log(full)
    return full;
    
}
fullName('rakib');

