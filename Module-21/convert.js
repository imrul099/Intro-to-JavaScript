function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
const shuvoHeight = inchToFeet(76);
console.log(shuvoHeight.toFixed(3));

//75--------

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const feetRemaining = inch %12;
    const result = feetNumber +  ' fit, ' + feetRemaining + ' inch ';
    return result;
    
}
// const imrulHeight = inchToFeet2(75);
// console.log(imrulHeight);



// Miles to Kilometers

function mileToKilo(mile){
    const kilo = mile * 1.60934;
    return kilo;
}
console.log(mileToKilo(2));


// Kilo to Miles

function kiloToMiles(kilo){
    const miles = kilo * 0.621371;
    return miles;
}

console.log(kiloToMiles(2));