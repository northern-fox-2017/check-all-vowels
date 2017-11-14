
function allVowels(str){
  var vowels = 'aiueoAIUEO'

  for(var char of str){
    if(vowels.indexOf(char) === -1){
      return false
    }
  }
  return true
}

console.log(allVowels('aaaaaiiiiu'))
console.log(allVowels('aaAAaaaiiiiuAAEE'))
console.log(allVowels('vbsdsadsaqqq'))