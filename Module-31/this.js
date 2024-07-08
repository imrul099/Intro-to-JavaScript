class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}

const kodom = new Person('imrul molla', 21);
// console.log(kodom);
kodom.sleep();

const world = new Person('Dhaka', 1060);
world.sleep()