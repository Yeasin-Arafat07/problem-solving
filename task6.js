function calculateMoney(ticketSale){
    if(ticketSale < 0 )
    return "Provide input a positive number"
    const perTicket = ticketSale*120;
    const guard = 500;
    const staff = 8*50;
    const result = perTicket - (guard + staff);
    return result;
}

function cheekName(name){
    const letters = ['a','y','i','e','o','u','w']
    if(name !== "string"){
        return "invalid"
    }
    if(letters.includes(name.slice(-1))){
        return "good name"
    }
    else {
        return "bad name"
    }
} 

function deleteInvalids(arr){
    if(!Array.isArray (arr)){
        return "input must be an array";
    }
    let num = [];
    for(let i = 0; i<arr.length; i++){
       if(typeof arr[i] ==='number'){
        num.push(arr[i]);
       } 
    }
    return num;
}

function password(obj){
    const name = obj.name || 'Invalid';
    const birthYear = obj.birthYear;
    if (birthYear < 1000 ){
        return 'Invalid'
    }
    const siteName = obj.siteName || 'invalid';

    const str =siteName + '#' + name+ '@' +  birthYear ;
    return str;   
}

function monthlySavings(arr , livingCost) {
    if(!Array.isArray(arr) || livingCost !== 'number'){
        return 'Invalid Number';
    }
    let sum = 0;
     for (let i = 0; i < arr.length; i++) {
         if(typeof arr[i] >= 3000){
            arr[i] = arr[i]*20/100;
         }
         sum = sum+ arr[i];
     } 
    return sum - livingCost;
}