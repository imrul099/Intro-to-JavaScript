const x = 'hello';
const y = 'heLLo';

if(x === y.toLowerCase()){ //toLowerCase()
    console.log('both are same');
}else{
    console.log('same same but different')
}



//______includes()

const him = 'hello world';
const her = 'heLlo';

console.log(him.toLowerCase().includes(her.toLowerCase()));


//__________trim__________
//not work at middle position.
//actual work in start and end ;

const m = 'hey there';
const n = 'hey there  ';

if(m === n.trim()){
    console.log('same');
}else{
    console.log('different')
}

