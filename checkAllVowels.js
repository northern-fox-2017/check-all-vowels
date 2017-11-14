function cekVowel (kata){
  var vowel = ['a','i','u','e','o'];
  var huruf = kata.toLowerCase().split('');
  var kataVowel = '';

  for (var i = 0; i < huruf.length; i++) {
    if(vowel.indexOf(huruf[i]) === -1){
      return false;
    } else {
      return true;
    }
  }
// 1. bikin var huruf yang berisikan split kata
// 2. bikin var vowel yang berisikan kata vowel
// 3. perulangan sepanjang kata length, result.push jika huruf sama dengan vowel
// 4. if result = [] return true,



}


console.log(cekVowel('aiuEo')); // TRUE
console.log(cekVowel('geGlas')); // FALSE
console.log(cekVowel('ieuoeiueEOUiiuoa')); // TRUE
