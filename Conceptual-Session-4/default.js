// const add = (x=0, y=0) =>{
//     console.log(x+y);
// };
// add(2);


// Object Theke Alada Alada Value Paoyar Jonno

const person = {
    name : 'mehedi',
    age : 26
}

// const showInfo = (props) => {
//     const {name, age} = props;
//     console.log(name, age);
// }


// One Line Destructure:
const showInfo = ({name, age}) => {
    
    console.log(name, age);
}
showInfo(person);