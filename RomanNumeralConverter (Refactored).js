function convertToRoman(num) {
  // only works up to 9999
  const [ones = 0, tens = 0, hundreds = 0, thousands = 0] = [...num.toString()]
        .reverse()
        .map((n, i) => +n * 1 ** i);
  const numSplit = { ones, tens, hundreds, thousands };
  
  const romanSymbols = [['I', 'V', 'X'], ['X', 'L', 'C'], ['C', 'D', 'M'], ['M']];
  let romanNumsSeparated = ["", "", "", ""];
  
  function indNumConverter (groupNum, currVal) {
	if (currVal < 4) {
		for (let i=0; i < currVal; i++) {
			romanNumsSeparated[groupNum] += romanSymbols[groupNum][0];
        } 
    } else if (currVal == 4) {
        romanNumsSeparated[groupNum] = romanSymbols[groupNum][0] + romanSymbols[groupNum][1];
    } else if (currVal > 4 && currVal < 9) {
        romanNumsSeparated[groupNum] = romanSymbols[groupNum][1];
        for (let i=5; i < currVal; i++) {
			romanNumsSeparated[groupNum] += romanSymbols[groupNum][0];
        }
    } else {
          romanNumsSeparated[groupNum] = romanSymbols[groupNum][0] + romanSymbols[groupNum][2];
    } 
  }
	
  for (let prop in numSplit) {
    if (prop == 'ones') {
	  indNumConverter(0, numSplit[prop]); 
	  
    } else if (prop == 'tens') {
		indNumConverter(1, numSplit[prop]); 
		
    } else if (prop == 'hundreds') {
		indNumConverter(2, numSplit[prop]);
		
    } else if (prop == 'thousands') {
      for (let i=0; i < numSplit[prop]; i++) {
        romanNumsSeparated[3] += romanSymbols[3][0];
      }
    }
  }
  return romanNumsSeparated
		.reverse()
		.join('');
}

convertToRoman(36);
