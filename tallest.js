//max number

// const larges = [34,45,78,45,45,43,77,45]
// function getMax(numbers) {
//     let max =numbers[0];
//     for(const num of numbers){
//         if(num>max){
//             max = num;
//         }
//     }
//     return max;
// }
// const bigger = getMax(larges);
// console.log(bigger);

//min number

const number = [34,45,66,55,33,67,98,23,45,23,33,]
function getMin (numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num<min){
            min = num;
        }
    }
    return min;
}
const large =getMin(number);
// console.log(large);

// cheapest phone price
const phones = [
    {name :'Samsung', price: 20000,color:'black'},
    {name :'Iphone', price: 300000,color:'black'},
    {name :'oppo', price: 10000,color:'black'},
    {name :'onePlus', price: 30000,color:'black'},
    {name :'xoami', price: 40000,color:'black'},
]

function getCheapest(numbers) {
    let min = phones[0];
    for(const num of numbers){
        if(num.price < min.price){
            min = num;
        }
    }
    return min;
}
const chep = getCheapest(phones);
// console.log(chep);

//sum of string
const totalObject = [
    {name : 'shampoo', price : 3000},
    {name : 'biskit', price : 100},
    {name : 'kola', price : 2000}
]
function sumOfObject(numbers){
    let sum = 0;
    for(const num of numbers){
        sum = sum + num.price;
    }
    return sum;
}
const sum = sumOfObject(totalObject);
// console.log('sum of object is :', sum);


// indivisual price of product

const products = [
    {name:'cha', price : 10, quanty : 12},
    {name:'biskut', price : 5, quanty : 3},
    {name:'kola',  price : 8, quanty : 2},
]
function allProduct (products){
    let total = 0;
    for(const product of products){
        const thisProduct = product.price * product.quanty;
        total = total + thisProduct;
    }
    return total;
}
const coast = allProduct(products);
console.log(coast);

