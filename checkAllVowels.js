function checkAllVowel(str) {
  let vowel  = ['a','i','u','e','o'];
  let newStr = ''

  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowel.length; j++) {
      if (str[i] == vowel[j] ) {
        newStr += str[i]
      }
    }
  }

  return newStr == str;
}
console.log(checkAllVowel('bibo'));
console.log(checkAllVowel('oiao'));
