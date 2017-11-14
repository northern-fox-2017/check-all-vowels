function checkAllVowel(string) {
    let vocal=['a','i','u','e','o','A','I','U','E','O'],checkSum=0;
    for(let i=0;i<string.length;i++){
        for(let j=0;j<vocal.length;j++){
            if(string[i]===vocal[j]){
                checkSum++
            }
        }
    }
    return string.length===checkSum;
}

console.log(checkAllVowel('aAuE')); //true
console.log(checkAllVowel('aAruE')); //false