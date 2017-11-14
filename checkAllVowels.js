function checkAllVowels(kata){
	
	var vowel = ['a', 'e', 'i', 'u', 'o'] // var vowel sebagai pembanding
	var tampung = true;
	var str = kata.toLowerCase();
	//var huruf = kata.split('')
	for(var i = 0; i < str.length; i++){ // buat perulangan untuk mambaca setiap huruf didalam kata
		//console.log(kata[i])
		//for(var j = 0; j < vowel.length; j++){
			//console.log(vowel[j])
			if(vowel.indexOf(str[i]) === -1){
				tampung = false
			}
		}
		return tampung	
	}
	

console.log(checkAllVowels('abcdefghijk')) // False
console.log(checkAllVowels('aieuo')) // True
console.log(checkAllVowels('cbcdifghxjk')) // False
console.log(checkAllVowels('aaa')) // True