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
const nam = cheekName('hkhe');
console.log(nam);