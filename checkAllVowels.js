function checkAllVowelsSelasa(str) {
  var unVowel = 'qwrtypsdfghjklzxcvbnm'

  for (var i = 0; i < unVowel.length; i++) {
    if (str.toLowerCase().indexOf(unVowel[i]) > 0) {
      return false
    }
  }
  return true
}

console.log(checkAllVowelsSelasa('aqrst,ukaei,ffooo')); // false
console.log(checkAllVowelsSelasa('eeaaaaAIiiiiiOoo')); // true
console.log(checkAllVowelsSelasa('yrwtqlkjp')); // false



function generateTable(col, row) {
	var result = []
	for(var i=0; i<col; i++) {
    for(var j=0; j<row; j++) {
      result.push([])
    }
	}
	return result
}

function checkAllVowels(str) {
  var table = generateTable(5, 3)
  var row = 0

  for(var i=0; i<arr.length; i++) {
    table[row].push(arr[i])

    if(row < 2) {
      row++
    } else {
      row = 0
    }
    debugger
  }
  printPreview(table)
}

function printPreview(table) {
	for(var i=0; i<table.length; i++) {
		console.log(`Baris ${i} : `, table[i])
	}
}
