function checkVowel(kata) {
  let vowel = 'aiueo'
  let hasil = ''

  for (let i = 0; i < kata.length; i++) {
    hasil = vowel.indexOf(kata[i])
    if(hasil === -1){
      return false
    }
  }
  return true
}
console.log(checkVowel('aiueo'));
console.log(checkVowel('sudoku'));
console.log(checkVowel('jsracer'));
console.log(checkVowel('aaaaiiiooouuuiiuuu'));
