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

console.log(password({ name: 'kolimuddin' , birthYear: 1999 , siteName: 'google' }));