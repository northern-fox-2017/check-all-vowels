function checkAllVowel(str) {
    let vowel = 'aiueo'
    let strLow = str.toLowerCase()
    for (let i = 0; i < strLow.length; i++) {
        if(vowel.indexOf(strLow[i]) === -1) {
            return false
        } 
    }
    return true
}

//test case
console.log(checkAllVowel('AiuEo'))
console.log(checkAllVowel('aiueo'))
console.log(checkAllVowel('AIUEO'))
console.log(checkAllVowel('aiUEHDgf'))
console.log(checkAllVowel('AiUeO'))
