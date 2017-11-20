let checkVowels = (input) => {
  //  let vowel = ['a','i','u','e','o']
  // //  console.log();
  // let toLowercase = input.toLowerCase()
  // // console.log(toLowercase);
  // let counter = 0
  // for (i of toLowercase){
  //   // console.log(`ini i atas ${i}`);
  //   for (j of vowel){
  //     // console.log(`ini j bawah ${j}`);
  //     if (i === j){
  //       counter++
  //     }
  //   }
  // }
  // return (counter == input.length)? true : false

  // Rekursif
  let vowel = 'aiueo'
  let toLowercase = input.toLowerCase()
  let counter = 0
  if (toLowercase.length == 0){
    return true
  }
  if (vowel.indexOf(toLowercase[0])== -1){
    return false
  }
  return checkVowels(toLowercase.slice(1))
}



console.log(checkVowels('aiueAouA'));
