function getLargest(values){
    if(!Array.isArray(values)){
        return 'pass an array'
    }else{
        let max = values[0];
    for (i = 1; i < values.length; i++){
        if(typeof values[i] !== 'number'){
            return 'all values should be number'
        }

        if(values[i] > max){
            max = values[i];
        }
    }
    return max
    }
    
}

const numbers = [3,5,3,6, 7, 2];
console.log(getLargest(numbers));