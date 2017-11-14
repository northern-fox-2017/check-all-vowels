function checkVowels(str){
  const vowel = 'aiueo'
  for(let i = 0; i < str.length; i++){
    if(vowel.indexOf(str[i]) == -1){
      return false
    }
  }
  return true
}

// Test Case
console.log(checkVowels('qiueo'));
console.log(checkVowels('iueo'));
console.log(checkVowels('qiuasdeo'));
console.log(checkVowels('qado'));
console.log(checkVowels('aaaio'));
console.log(checkVowels('qddub'));
console.log(checkVowels('iioueeoiiueeo'));
console.log(checkVowels('qiueo'));
