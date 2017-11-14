function checkVowel(str) {

  let vocal = 'AIUEO';
  str = str.toUpperCase();
  for(let i=0; i<str.length; i++){
    if(str == vocal){
      return true
    }
    return false
  }
}
console.log(checkVowel('aiuEo')); //true
console.log(checkVowel('bfghti')); //false
console.log(checkVowel('abcdefghij')); //false
