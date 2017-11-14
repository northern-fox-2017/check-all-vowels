function checkAllVowels(str) {
    var vowelDictionary = ['A', 'I', 'U', 'E', 'O']
    for (var i = 0; i < str.length; i++) {
        if (vowelDictionary.indexOf(str[i].toUpperCase()) === -1) {
            return false;
        }
    }
    return true;
}

console.log(checkAllVowels('abcde,abc,ea'))
console.log(checkAllVowels('aaaaa'))
console.log(checkAllVowels('aaab'))
console.log(checkAllVowels('aaaiueo'))