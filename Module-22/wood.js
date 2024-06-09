 function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 5;
    const perTableWood = 20;
    const perBedWood = 40;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

   const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;

   return totalWood;
 }

 const wood = woodQuantity(2, 2, 5);
 console.log(wood);



 //shirt - 500;
 // pant - 500;
 //shoe - 900;

 function fashionQuantity (shirtQuant, pantQuant, shoeQuant){
  const perShirtPrice = 500;
  const perPantPrice = 500;
  const perShoePrice = 900;

  const totalShirtPrice = perShirtPrice * shirtQuant;
  const totalPantPrice = perPantPrice * pantQuant;
  const totalShoePrice = perShoePrice * shoeQuant;

  const totalFashion = totalShirtPrice + totalPantPrice + totalShoePrice;
  return totalFashion;
 }

 const fashion = fashionQuantity(2, 3, 1);
 console.log(fashion);