function show(name, age){
    console.log('my name is: ', name, 'age is: ', age);
};

function fun1(name, age, callback){
    console.log('hello from first fnc');
    setTimeout(() => {
        callback(name, age);

    }, 2000);
    
}
fun1('imrul', 26, show);


//akta function er moddhe arek ta function er nam diye pass korchi.....simple.*