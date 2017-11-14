const vowel = 'aiueo';

const checkVowel = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) === -1) return false;
  }

  return true;
}

console.log(checkVowel('baca'));