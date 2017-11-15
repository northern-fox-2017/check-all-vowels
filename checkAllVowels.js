const vowel = 'aiueo';

const checkVowel = (str) => {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) === -1) return false;
  }

  return true;
}

console.log(checkVowel('Aa'));