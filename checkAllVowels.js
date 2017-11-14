let checkVowels = (input) => {
   let vowel = ['a','i','u','e','o']
  //  console.log();
  let counter = 0
  for (i of input ){
    // console.log(`ini i atas ${i}`);
    for (j of vowel){
      // console.log(`ini j bawah ${j}`);
      if (i === j){
        counter++
      }
    }
  }
  return (counter == input.length) ? true : false
}


console.log(checkVowels('aiueoaiueo'));
