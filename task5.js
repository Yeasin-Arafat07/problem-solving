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
const arr = [ 1000 , 2000 , 3000 ];
const livingCost = 5400;
console.log(monthlySavings(arr,livingCost));