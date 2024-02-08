// function add(x,y){
//     const total = x + y;
//     return total;
// }
// const d = add(10,30);
// console.log(d);

// function subtract(a,b){
//     const sub = (a - b);
//     return sub;
// }
// const s =subtract(20,40);
// console.log(s);


// function getOddEven(x){
//     if(x % 2=== 0);
//     return "even";
// }
// else{
//     return "odd";
// }
// const xy = getOddEven(8);
// console.log(xy);


// function getName(b){
//     for (let i = 0; i < b; i++){
//         console.log('Tanveer');
//     }
// }
// getName(4);

// function get(info){
//     if(typeof info !== "Object"){
//         return "thik nai re vai";
//     }
//     return `my name is : ${info.name}, my age is : ${info.age}`;
// } 
// console.log(get({name:"tanveer", age : "25"}));



// function nameAge(type){
//     if(!type.name || !type.age);
//     return "must bring name and age.";
//     if (typeof type.name !== string || typeof type.age !== number);
//     return "give string and number"
//     return `THe name is: ${type.name}, And age is :${type.age}`;

// }
// console.log(nameAge({name :'Abrar', age:'77'}))


function findLarge(values){
    let max = values[0]
    for(let i=1; i < values.length; i++){
        if(values[i] > max){
            max = values[i];
        }
    }
    return max;
}
const number =[3,45,,3,56,8678,3,243,34,345]
console.log(findLarge(number));

