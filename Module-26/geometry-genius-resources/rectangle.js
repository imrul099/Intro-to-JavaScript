document.getElementById('btn-rectangle').addEventListener('click', function(){
    //calculate the width area;
    const widthInput = document.getElementById('rectangle-width');
    const widthInputText = widthInput.value;
    const width = parseFloat(widthInputText);
    
    //clear the input value field
    widthInput.value = '';

    //calculate the length area;
    const lengthInput = document.getElementById('rectangle-length');
    const lengthInputText = lengthInput.value;
    const length = parseFloat(lengthInputText);
    
    //clear the input value field
    lengthInput.value = '';


    //calculate the area section
    const area = width * length;
    //console.log(area);

    // ********
    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = area;
});