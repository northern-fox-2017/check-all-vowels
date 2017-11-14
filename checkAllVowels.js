function checkAllVowels(str){

  let vowel = 'aiueo'
  for (var i = 0; i < str.length; i++) {
     if (vowel.indexOf(str[i].toLowerCase().trim()) !== -1){
       return true;
     }else{
       return false;
     }
  }
}
console.log(checkAllVowels('pkhaA uindk'));
console.log(checkAllVowels('aiuuoAI'));
