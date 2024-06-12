// Problem -1

function AnaToVori(Ana){
    if(typeof Ana !== 'number' || Ana < 0){
        return 'please provide a valid integer'
    }

    const vori = Ana * 0.0625;
    return vori;
}

const vori = AnaToVori('5');
console.log(vori);