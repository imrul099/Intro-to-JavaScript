// Problem -1

function AnaToVori(Ana){
    if(typeof Ana !== 'number' || Ana < 0){
        return 'please provide a valid integer'
    }

    const vori = Ana * 0.0625;
    return vori;
}

const vori = AnaToVori('5');
//console.log(vori);


//Problem -2;

function pandaCost(singara, samusa, jilapi){
    if(typeof singara !== 'number' || typeof samusa !== 'number' || typeof jilapi !== 'number'){
        return 'plese use valid number';
    }
    else if(singara < 0 || samusa < 0 || jilapi < 0){
        return 'use positive number';
    }
    else{
        const singaraPrice = 7;
    const samusaPrice = 10;
    const jilapiPrice = 15;

    const total = singara * singaraPrice + samusa * samusaPrice + jilapi * jilapiPrice;
    return total;
    }


}

const totalPrice = pandaCost(1, -3, 3);
//console.log(totalPrice);





//#Task-4;

function getPicnicBudget(participents){
    if(typeof participents !== 'number' || participents < 0){
        return 'valid positive number'
    }
    else {
        let first100Price = 0;
        let second101To200 = 0;
        let remainingPrice = 0;
        let totalCost = 0;

        if(participents <= 100){
            first100Price = participents * 5000;
            return first100Price;
        }
        else if(participents <= 200){
            first100Price = 5000 * 100;
            second101To200 = (participents - 100) * 4000;
            total = first100Price + second101To200;
            return total;
        }
        else{
            first100Price = 5000 * 100;
             second101To200 = 4000 * 100;
            remainingPrice = (participents - 200) * 3000;
            total = first100Price + second101To200 + remainingPrice;
            return total;
        }
    }
}

console.log(getPicnicBudget(301))