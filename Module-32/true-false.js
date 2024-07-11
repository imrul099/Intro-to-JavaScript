/**
 * True:
 * 1. true.
 * 2. any number(+ve, -ve) will be true other than 0.
 * 3. any string other than empty string.
 * 4. '0', 'false'
 * 5. {}
 * 6. []
 * 
 * 
 * FALSE:
 * 1. false.
 * 2. 0.
 * 3. '' (empty string);
 * 4. null
 * 5. undefined.
 * 6. NaN
 */


//Easiest way to get an element true or false;
const value = ''
console.log(!!value);