// class Animal{
//     name = 'jabbar';
//     color = 'black';

// };

// const cat = new Animal();
// console.log(cat.name);

class Animal {
    name; 
    sreni;
    color;

    constructor(biralName, biralSreni, menuColor){
        this.name = biralName;
        this.sreni = biralSreni;
        this.color = menuColor;
    };
    showInfo(){
        console.log(`my pet name is ${this.name} . sreni is ${this.sreni}`);
    }
};

const  cat = new Animal('minu', 'desibillu', 'black');
const  cat2 = new Animal('billu', 'desibillu', 'cokcoke kala');
const person = new Animal('amena', 'manuser bacca');
cat2.showInfo();
person.showInfo()