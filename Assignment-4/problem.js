// Task - 1:

function calculateMoney(ticketSale){
    if(ticketSale < 0){
        return 'please provide positive number'
    }
    else{
        const perTicketPrice = 120;

    const gatemanCost = 500;
    const lunchCost = 50 * 8;
    const totalCost = gatemanCost + lunchCost;

    const totalSaleTicket = ticketSale * perTicketPrice;
    const total = totalSaleTicket - totalCost;
    return total;
    }
    

}

function checkName(name){
    if(typeof name !== 'string'){
        return 'Invalid'
    }
    name = name.trim().toLowerCase();

    const EndingChars = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    const lastChar = name.charAt(name.length - 1);

    if (EndingChars.includes(lastChar)) {
        return 'Good Name';
    } else {
        return 'Bad Name';
    }
}

function deleteInvalids(array){
    if(!Array.isArray(array)){
        return 'Invalid'
    }
    let arr = [];
    
    const result = array.filter(arr => typeof arr === 'number' && !isNaN(arr));
    return result;
    
}
