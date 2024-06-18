//option 2: onclick function...

function makeRed(){
    document.body.style.backgroundColor = 'red';
}

//option-3:
const makeBtnBlue = document.getElementById('btn-blue');
makeBtnBlue.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

//option-3 another:

const makeBtnPurple = document.getElementById('btn-purple');
makeBtnPurple.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

//option-4:
const makePink = document.getElementById('btn-pink');
makePink.addEventListener('click', btnPink);

function btnPink(){
    document.body.style.backgroundColor = 'pink';
}

//option-4: another__>>

const makeBtnGreen = document.getElementById('btn-green');
makeBtnGreen.addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
})

//option-final (mostly used):

document.getElementById('btn-tomato').addEventListener('click', function(){
    document.body.style.backgroundColor = 'tomato';
})