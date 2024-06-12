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
console.log(totalPrice);