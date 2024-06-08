//array has some duplicate elements


const biriyaniKhor = ['alim', 'jalim', 'kalim', 'jalim', 'kalim', 'ratul', 'sohag', 'ratul'];

const numbers = [7, 8, 4, 6, 8, 4, 2, 7, 4];

function duplicateArray(arr){
    const unique = [];
    for(const item of arr){
        if(unique.includes(item)=== false){
            unique.push(item);
        }
    }
    return unique;
}

//const uniqueArray = duplicateArray(biriyaniKhor);
const uniqueArray = duplicateArray(numbers);
console.log(uniqueArray);