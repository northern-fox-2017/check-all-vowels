
function allVowels(str){
  var vowels = 'aiueo'

  for(var char of str){
    if(vowels.indexOf(char) === -1){
      return false
    }
  }
  return true
}

console.log(allVowels('aaaaaiiiiu'))
console.log(allVowels('vbsdsadsaqqq'))