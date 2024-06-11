//Type of function

//no parameters, no return;
//no paremeters, but return;
// parameters, but not return;
// parameters, return;


//no parameters, no return;

function getSome(){
    console.log('there are nothing to do');
}

//no paremeters, but return;
function getSome(){
    return 5;
}

// parameters, but not return;
function getSome(name){
    console.log(name);
}


// parameters, return;

function getSome(x, y){
    return x+y;
}