function getMax (num1, num2){
    if( num1> num2){
        return num1;
    }
    else{
        return num2;
    }
}
const large = getMax(23,43);
// console.log(large);

//max of the three


// let tim = 29;
// let kim = 30;
// let jim = 59;
// if (tim>jim && tim > kim) {
//     console.log('tim is big');
// }
// else if (kim>jim && kim > tim){
//     console.log('kim is ultimate winner');
// }
//  else {
//     console.log('jim is the patty one..');    
// }

function get3of (tim,kim,jim){
    if(tim>kim && tim>jim){
        return tim;
    }
    else if ( kim> tim && kim > jim){
        return kim;
    }
    else{
        return jim
    }
}
const largest = get3of(36,354,635);
console.log(largest);


const bar = Math.max(3,4434,3,43,22,2,4,44,34)
console.log(bar);