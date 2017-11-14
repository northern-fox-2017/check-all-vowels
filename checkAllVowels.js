function checkVowel(str) {
  var vowel = ['a', 'i', 'u', 'e', 'o']
  for (var i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i].toLowerCase()) == -1) {
      return false;
    }
  }
  return true;
}

console.log(checkVowel('1aaaA'))
