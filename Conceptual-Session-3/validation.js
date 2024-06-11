function details(info){
    if(typeof info !== 'object'){
        return 'input should be an object'
    }
    else if(!info.name || !info.age){
        return 'object must contain name and age property'
    }
    else if(typeof info.name !== 'string' || typeof info.age !== 'number'){
        return 'please prove valid number or string'
    }

    else if (info.age <= 0){
        return 'provide positive number'
    }



    return `my name is : ${info.name}. my age: ${info.age};`
}

const man = {
    name : 'rakib',
    age : -45
}

const detailsInfo = details(man);
console.log(detailsInfo);