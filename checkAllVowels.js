function checkVowel(kata) {
  if (kata.length == 0) {
    return true
  }

  if(kata[0] != 'a' && kata[0] != 'i' && kata[0] != 'u' && kata[0] != 'e' && kata[0] != 'o'){
    return false
  }
  return checkVowel(kata.slice(1))
}
console.log(checkVowel('aiueo'));
console.log(checkVowel('sudoku'));
console.log(checkVowel('jsracer'));
console.log(checkVowel('aaaaiiiooouuuiiuuu'));
