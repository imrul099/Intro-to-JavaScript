function calculateArea(){
    const base = getInputValueById('parallelogram-base');
    
    const height = getInputValueById('parallelogram-height');

    const area = base * height;

    setInnerTextById('parallelogram-area', area);
}


function getInputValueById(inputId){
     const inputField = document.getElementById(inputId);
     const inputValueText = inputField.value;
     const inputValue = parseFloat(inputValueText);
     

     //clear the input field
     inputField.value = '';

     return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}
