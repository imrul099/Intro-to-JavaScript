const person = {
    name : 'imrul',
    roll : 86,
    dept : 'Management',
    year : '3rd year'
}

console.log(person);

const keys = Object.keys(person);
console.log(keys);


const value = Object.values(person);
console.log(value);

const entries = Object.entries(person);
console.log(entries);
//Output: (Two dimentional Array)
// [
//     [ 'name', 'imrul' ],
//     [ 'roll', 86 ],
//     [ 'dept', 'Management' ],
//     [ 'year', '3rd year' ]
//   ]

//freeze: Object.freeze()
// >> Read..
// >> Create . (NO).
// >> Update . (no)
// >> Delete . (No)

//seal: Object.seal() -->>

// >> read . 
// >> Create (no)
// >> Update (yes)
// >> delete (no)