function vowelChecker(str){
  let abjad = 'aiueo'
  let arrAbjad = abjad.split('')
  // return arrAbjad
  for(var i = 0; i < arrAbjad.length;i++){
    for(var j = 0;j < str.length;j++){
      if(arrAbjad[i] == str[j]){
        arrAbjad.splice(i,1)
      }
    }
  }
  console.log(arrAbjad)
  if(arrAbjad.length == 0){
    return true
  }
  else{
    return false
  }
}
console.log(vowelChecker('bbhahajsncauisncqwjldnajksbahklbaschklwbixowa')) //false (no 'u' nor 'e')
console.log (vowelChecker('dhsjakdlhasjdklasaiueobahdjksahdsjiainchia@')) //true (all vowels used)
