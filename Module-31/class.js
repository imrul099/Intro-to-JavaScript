const products = [
    {id: 1, name : 'lenevo', price : 650000},
    {id: 2, name : 'hp', price : 50000},
    {id: 3, name : 'mac', price : 1650000}
];


//class: has some properties, method.
class Teacher{
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    lecture(){
        console.log('sir is teaching now');
    }
}

const susil = new Teacher('susil sir', 'higher math');
console.log(susil);

const amin = new Teacher('Aminul Hauqe', 'Bangla Bajar');
console.log(amin);