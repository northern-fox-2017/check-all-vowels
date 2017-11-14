
// 2 for
function checkAllVowels(kata){
    var vocal = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
    var pembuktian = true;
    kata = kata.toLowerCase();
    for(var i=0; i<kata.length; i++){
        for(var j=0; j<vocal.length; j++){
            if(kata[i] === vocal[j]){
              return false;
            }
            
        }
    }
    console.log(kata);
    return pembuktian;
}

// 1 for + indexOf
function checkAllVowels(kata){
    kata = kata.toLowerCase();
    var vowel = "bcdfghjklmpqrstvwxyz";
    for(var i=0; i<kata.length; i++){
      if(vowel.indexOf(kata[i]) !== -1){
        return false;
      }
    }
    return true;
}