function check(str) {
  let vocal = ['a','i','u','e','o']
    for (var i = 0; i < str.length; i++) {
        if (vocal.indexOf(str[i])==-1) {
            return false;
            }
        }
    return true;
}

console.log(check('aaaaaaiiiiiooooo'));//true
console.log(check('ini salah lho'));//false
