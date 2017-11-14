let checkVowel = (input)=>{
  let vowel = 'aiueo'
  let arrInput = input.split('')
  //console.log(arrInput);
  if(arrInput.length == 1 && vowel.indexOf(arrInput[0]) == -1){
    return false
  }else if(vowel.indexOf(arrInput[0]) == -1){
    arrInput.splice(0,1)
    return checkVowel(arrInput.join(''))
  }
  return true
}

console.log(checkVowel('aqrstukaeifooo'))
console.log(checkVowel('zzzfghzzzzzzz'))
// f(aqrstukaeifooo)
//
// f(qrs)
