/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1: get base value of the triangle ;
 * step-2: added an id in the base input field;
 * step-3: use getElementById to access the input field;
 * step-5: get value from the input field . (value is string now);
 * step: 5: convert the value to a  number .use parseFloat.
 * 
 */

function calculateTriangleArea(){
    //get triangle base
    const triangleInput = document.getElementById('triangle-base');
    const triangleInputText = triangleInput.value;
    const triangleBase = parseFloat(triangleInputText);
    triangleInput.value = '';
    


    //get triangle height
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleInputHeighText = triangleHeightInput.value;
    const triangleHeight = parseFloat(triangleInputHeighText);
    //clear the input value;
    triangleHeightInput.value = '';

    //calculate the triangle area;
    
    const area = 0.5 * triangleBase * triangleHeight;
    //console.log(area);

    const triangleSpanArea = document.getElementById('triangle-area');
    triangleSpanArea.innerText = area;
}