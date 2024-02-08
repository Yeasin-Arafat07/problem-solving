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
const result =  [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
console.log(deleteInvalids(result));

