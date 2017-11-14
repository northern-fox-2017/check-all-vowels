//pseudocode
//pisahkan string yang di input menjadi huruf per huruf kemudian tampung di variabel
//Buat variable hasil yang akan menampung huruf vowel yang ada di dalam string tersebut
//cek satu persatu (sampai akhir kata/input string) huruf pada string yang sudah di pisah menjadi huruf
//jika ketemu huruf vowel, masukan ke variable hasil
//terakhir, cek apakah length dari variable hasil sama
//dengan variable yang menampung string yang sudah dipisahkan menjadi huruf
//jika ya, kembalikan 'true' (berarti string yang diinput terdari dari huruf vowel semua)
//jika tidak, kembalikan 'false'



function checkVowels(str){
  let strSplit = str.split('');
  let hasil=[];
  // console.log(strSplit);
  for(var i=0;i<strSplit.length;i++){
    if(strSplit[i]==='a'|| strSplit[i]==='i'||strSplit[i]==='u'||strSplit[i]==='e'||strSplit[i]=='o'){
      hasil.push(strSplit[i]);
      // console.log(hasil);
      if(hasil.length===strSplit.length){
        return true;
      }
    }
  }
  return false;
}






console.log(checkVowels('aaaiiiiiii'))
console.log(checkVowels('aaaaanuuuuuu'))
