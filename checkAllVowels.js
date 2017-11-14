/* 
checkAllVowels() adalah fungsi yang menerima parameter berupa string,
fungsi memeriksa apakah input terdiri hanya dari vokal atau tidak,
jika ya fungsi akan mereturn TRUE
jika terdapat karakter yang bukan vokal, aka direturn FALSE

*/

function checkAllVowels(string){
    let vocals = ['A', 'a', 'I', 'i', 'U', 'u', 'E','e', 'O', 'o'];
    for (let i = 0; i < string.length -1; i++) {
        if (vocals.indexOf(string[i]) === -1){
            return false
        }
    }
    return true;
}


//TEST CASES
console.log(checkAllVowels('AIUEO'));   // TRUE
console.log(checkAllVowels('AIBEOd'));  // FALSE
console.log(checkAllVowels('AiUeO'));   // TRUE
console.log(checkAllVowels('ALOHA'));   // FALSE



