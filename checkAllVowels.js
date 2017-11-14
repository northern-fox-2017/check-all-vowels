function checkAllVowels(str) {
  var vowel = 'aiueo'
  var boolean = true

  for (let i = 0; i < str.length; i++) {
    if(vowel.indexOf(str[i]) === -1) {
      boolean = false;
    }
  }
  
  return boolean;
}

console.log(checkAllVowels('aiueo')); //TRUE
console.log(checkAllVowels('aiasdueo')); //FALSE
console.log(checkAllVowels('aixcueo')); //FALSE
console.log(checkAllVowels('aiaaeueo')); //TRUE
