/**
 * shirt price = 200;
 * pant price = 300;
 * shoe price = 1000;
 */
function totalQuan(shirtQuan, pantQuan, shoeQuan){
    const perShirtprice = 200;
    const perPantprice = 300;
    const perShoeprice = 1000;

    const totalShirt = shirtQuan * perShirtprice;
    const totalPant = pantQuan * perPantprice;
    const totalShoe = shoeQuan * perShoeprice;

const totalPrice = totalShirt + totalPant + totalShoe;
return totalPrice;

}
const price = totalQuan(20,10,1);
console.log(price);
