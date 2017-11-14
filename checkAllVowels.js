function cekVowel (kata){
  var vowel = ['a','i','u','e','o'];
  var huruf = kata.split('');
  var kataVowel = '';


  for (var i = 0; i < huruf.length; i++) {
    for (var j = 0; j < vowel.length; j++){
      if(huruf[i] === vowel[j]){
        kataVowel += huruf[i]
      }
    }
  }

  if(kataVowel.length === kata.length){
    return true;
  } else {
    return false;
  }
// 1. bikin var huruf yang berisikan split kata
// 2. bikin var vowel yang berisikan kata vowel
// 3. perulangan sepanjang kata length, result.push jika huruf sama dengan vowel
// 4. if result = [] return true,



}


console.log(cekVowel('aiueo')); // TRUE
console.log(cekVowel('gelas')); // FALSE
console.log(cekVowel('ieuoeiueoiiuoa')); // TRUE
