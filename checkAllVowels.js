function checkVowels(string){
	var arr = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
	var lowerCase = string.toLowerCase();
	var count = 0;
	debugger
	for(var i = 0; i < arr.length; i++){
		if(lowerCase.indexOf(arr[i]) !== -1){
			count = 1;
		}
	}
	return (count === 0) ? true : false;
	
}
console.log(checkVowels('AIUOaeuiiiiOOIUIiUIAIUOaeuiiiiOOIUIiUIAIUOaeuiiiiOOIUIiUIAIUOaeuiiiiOOIUIiUI'));