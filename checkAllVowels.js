function checkVowel(str){
    const vowel = ['a','i','u','e','o']
    let strLow = str.toLowerCase();
    for(let i = 0; i<strLow.length;i++){
        if(vowel.indexOf(strLow[i]) === -1){
            return false
        }
    }
    return true
}

console.log(checkVowel('AiUeO'))
console.log(checkVowel('AiUeOb'))
