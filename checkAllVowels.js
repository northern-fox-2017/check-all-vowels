function checkAllVowel(str){
const vowel = ('aiueo')
let kondisi ; 
for (let i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) === -1){
    return kondisi = false;

    }
    else {
        kondisi = true;
    }
   
}
return kondisi;

}

console.log(checkAllVowel('iiioioioioiioioiwioi'))//false
console.log(checkAllVowel('diuiaoow')) //false
console.log(checkAllVowel('iuuaao'))//true
