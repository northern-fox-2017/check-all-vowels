function checkVowel(kata) {
  let vowel = 'aiueo'
  let hasil = ''

  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < vowel.length; j++) {
      if(kata[i] === vowel[j]){
        hasil += kata[i]
      }
    }
  }
  return hasil.length === kata.length
}
console.log(checkVowel('aiueo'));
console.log(checkVowel('sudoku'));
console.log(checkVowel('jsracer'));
