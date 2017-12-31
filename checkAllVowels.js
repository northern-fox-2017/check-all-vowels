function vowelChecker(str){
  let abjad = 'aiueo'
  // let arrAbjad = abjad.split('')
  // return arrAbjad
  // for(var i = 0; i < arrAbjad.length;i++){
  //   for(var j = 0;j < str.length;j++){
  //     if(arrAbjad[i] == str[j].toLowerCase()){
  //       arrAbjad.splice(i,1)
  //     }
  //   }
  // }
  // console.log(arrAbjad)
  // if(arrAbjad.length == 0){
  //   return true
  // }
  // else{
  //   return false
  // }

  for(var i = 0 ; i < str.length;i++){
    console.log(str[i])
    if(str[i].toLowerCase().indexOf('a') == -1 && str[i].toLowerCase().indexOf('i') == -1 && str[i].toLowerCase().indexOf('u') == -1 &&  str[i].toLowerCase().indexOf('e') == -1
    && str[i].toLowerCase().indexOf('o') == -1){
      return false
    }

  }
  return true
}
console.log(vowelChecker('aiueor')) //false (no 'u' nor 'e')
console.log (vowelChecker('aiueo')) //true (all vowels used)
