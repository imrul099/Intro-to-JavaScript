function fullName(first, second){
    if(typeof first !== 'string'){
        return 'please string';
    }
    else if(typeof second !== 'string'){
        return 'heyy not okay'
    }
    const full = first + ' ' + second;
    return full;
}

const result = fullName('rahat', 4);
// console.log(result);



///Using Object...............
function getPrice(product){
    if(typeof product !== 'object'){
        return 'i dont allow';
    }
    const price = product.price;
    return price;
}


//   const price = getPrice({name: 'molom', price: 45, brand: 'orjun'});
  const price = getPrice(6);
  console.log(price);



  //Array_______________

  function getSecond(numbers){
    if(Array.isArray(numbers) === false){
        return 'please provide a array'
    }
    const second = numbers[0];
    return second;
  }

  const second = getSecond(56);
  console.log(second);