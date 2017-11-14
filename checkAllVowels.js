// RELEASE 0 CARA BIASA

// function checkVowels(huruf) {
//   let hasil = '';
//   let arr = [];
//   for(let i = 0 ; i < huruf.length ; i++) {
//     if(huruf[i] === 'a' || huruf[i] === 'i' || huruf[i] === 'u' || huruf[i] === 'e' || huruf[i] === 'o') {
//       arr.push(huruf[i]);
//     }
//   }
//   if(arr.length === huruf.length) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// console.log(checkVowels("aiueo")); // true
// console.log(checkVowels("fabio")); // false
// console.log(checkVowels("aoo")); // true
// console.log(checkVowels("ivon")); // false
// console.log(checkVowels("oaoae")); // true



// RELEASE 0 CARA INDEX OF

function checkVowels(huruf) {
  let vowels = 'aiueo';

  for (var i = 0; i < huruf.length; i++) {
    let hasil = vowels.indexOf(huruf[i]);
      if(hasil === -1) {
        return false;
      }
  }
  return true;
}

console.log(checkVowels("iuoea")); // true
console.log(checkVowels("fabio")); // false
console.log(checkVowels("aoo")); // true
console.log(checkVowels("ivon")); // false
console.log(checkVowels("oaoae")); // true

// RELEASE 1

// function checkAllVowels(huruf) {
//   let hasil = '';
//   let pisah = huruf.split(',');
//   let arr = [];
//
//
//   for (let i = 0; i < pisah.length; i++) {
//     arr.push([]);
//       for(let j = 0 ; j < pisah[i].length ; j++) {
//         arr[i].push(pisah[i][j])
//       }
//   }
//   return arr;
// }
//
// console.log(checkAllVowels("qwert,aiueo,zxcvb"));
