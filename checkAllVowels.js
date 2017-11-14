
function checkAllVowels(str){
  let check = ['a','i','u','e','o'];

  for(let i in str){
    if(check.indexOf(str[i]) == -1){
      return false
    }
  }
  return true
}

console.log(checkAllVowels('aiueo'));
console.log(checkAllVowels('bairueo'));
console.log(checkAllVowels('oieua'));
