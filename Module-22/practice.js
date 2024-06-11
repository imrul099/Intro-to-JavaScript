/**
 * ### Task -1: 
       Find the lowest number in the array below.
 */

       function getLowestNum(numbers){
            let low = numbers[0];
            for(const number of numbers){
                if(number < low){
                    low = number;
                }
            }
            return low;
       }


       const heights = [167, 190, 120, 165, 137];
       const lowestNumber = getLowestNum(heights);
       //console.log(lowestNumber);



 /**
  * ### Task -2: 
   Find the friend with the smallest name.
  **/
       
   function getSmallestName(names){
        let smallName = names[0];
        for(const name of names){
            if(name.length < smallName.length){
                smallName = name;
            }
        }

        return smallName;
   }

   const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
   const smallestName = getSmallestName(heights2);
   console.log(smallestName);



   /**
    * ### Task-3: 
    * Your task is to calculate the `total budget` required to buy electronics:
    * 
    *  laptop = 35000 tk
    *  tablet = 15000 tk
    *  mobile = 20000 tk
    * 
    * Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop,  tablets, and mobile` and returns the `total money required`.
    * 
    */

        function calculateElectronicsBudget(laptopQuantity, tabletQuantity, mobileQuantity){
            const perLaptopPrice = 35000;
            const perTablePrice = 15000;
            const perMobilePrice = 20000;

            const laptopTotalPrice = laptopQuantity * perLaptopPrice;
            const tableTotalPrice = tabletQuantity * perTablePrice;
            const mobileTotalPrice = mobileQuantity * perMobilePrice;

            const total = laptopTotalPrice + tableTotalPrice + mobileTotalPrice;
            return total;
        }

        const totalEquip = calculateElectronicsBudget(2, 2, 3);
        console.log(totalEquip);

