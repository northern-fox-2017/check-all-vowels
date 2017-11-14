function checkAllVowel(str){
const vowel = ('aiueo')
let kondisi ; 
for (let i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i].toLowerCase()) === -1){
    return kondisi = false;

    }
    else {
        kondisi = true;
    }
   
}
return kondisi;

}

console.log(checkAllVowel('iiioioIoioiioioAiwioi'))//false
console.log(checkAllVowel('diuiaoow')) //false
console.log(checkAllVowel('iUuAao'))//true
