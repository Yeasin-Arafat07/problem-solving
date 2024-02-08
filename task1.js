function calculateMoney(ticketSale){
    if(ticketSale < 0 )
    return "Provide input a positive number"
    const perTicket = ticketSale*120;
    const guard = 500;
    const staff = 8*50;
    const result = perTicket - (guard + staff);
    return result;
}
const quantTicket = calculateMoney(1055);
console.log(quantTicket);