class Owner{
    ownerName = 'mehedi';
    ownerAge = 26;

    ownerInfo(){
        console.log(`ownerName : ${this.ownerName}. ownerAge : ${this.ownerAge}`)
    }
};


class Animal extends Owner{
    name ;
    color ;
    constructor(petName, petColor){
        super();
        this.name = petName;
        this.color = petColor;
    }

    showInfo(){
        console.log(`my pet name is ${this.name}. color is ${this.color}`)
    }
}

const goru = new Animal('goru', 'gray');
goru.showInfo()
goru.ownerInfo()