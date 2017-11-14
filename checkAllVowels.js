
function checkAllVowels(str){
  let check = ['a','i','u','e','o'];
  for(let i in check){
    if(str.length == 1) {
      if(str[0] == check[i]){
        return true
      }
    }
    if(str[0] == check[i]){
      return checkAllVowels(str.slice(1))
    }
  }
  return false


}

console.log(checkAllVowels('aiueo'));
console.log(checkAllVowels('bairueo'));
console.log(checkAllVowels('oieua'));
console.log(checkAllVowels('Aiueo'));
