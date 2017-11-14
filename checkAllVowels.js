function checkVowels(str) {
    var vowel = ['a', 'b', 'c', 'd', 'e'];
    var counter = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowel.indexOf(str[i]) !== -1)
            counter++;
    }

    if (counter === str.length) {
        return true;
    } else {
        return false;
    }
}



// function twoDimension (str) {
//     var result = [];
//     var arr = [];

//     for (var i = 0; i < str.length; i++) {
//         arr.push(str[i].split(''));
//         //result += arr;
//     }
//     return arr;
// }

console.log(checkVowels('aqrst'));
console.log(checkVowels('aaaaa'));
// console.log(checkVowels ('ukaei, ffooo')); 
/* OUTPUT
[ ['a', 'q', 'r', 's', 't'],
   ['u', 'k', 'a', 'e', 'i'],
   ['f', 'f', 'o', 'o', 'o'] ]
*/