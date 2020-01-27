function convertToRoman(num) {
  // only works up to 9999
  let numString = num.toString();
  let numSplit = {'thousands' : 0,
                  'hundreds': 0,
                  'tens' : 0,
                  'ones' : 0};
  if (numString.length == 1) {
    numSplit['ones'] = num;
  } else if (numString.length == 2) {
    numSplit['ones'] = Number.parseInt(numString[numString.length-1]);
    numSplit['tens'] = Number.parseInt(numString[0] + '0');
  } else if (numString.length == 3) {
    numSplit['ones'] = Number.parseInt(numString[numString.length-1]);
    numSplit['tens'] = Number.parseInt(numString[1] + '0');
    numSplit['hundreds'] = Number.parseInt(numString[0] + '00');
  } else {
    numSplit['ones'] = Number.parseInt(numString[numString.length-1]);
    numSplit['tens'] = Number.parseInt(numString[2] + '0');
    numSplit['hundreds'] = Number.parseInt(numString[1] + '00');
    numSplit['thousands'] = Number.parseInt(numString[0] + '000');
  }
  
  let romanSymbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let romanNumOnes = "";
  let romanNumTens = "";
  let romanNumHundreds = "";
  let romanNumThousands = "";
  
  for (let prop in numSplit) {
    if (prop == 'ones') {
      let currVal = numSplit[prop];
	  
      if (currVal < 4) {
        for (let i=0; i < currVal; i++) {
          romanNumOnes += romanSymbols[0];
        } 
      } else if (currVal == 4) {
          romanNumOnes = romanSymbols[0] + romanSymbols[1];
      } else if (currVal > 4 && currVal < 9) {
          romanNumOnes = romanSymbols[1];
          for (let i=5; i < currVal; i++) {
            romanNumOnes += romanSymbols[0];
          }
      } else {
          romanNumOnes = romanSymbols[0] + romanSymbols[2];
      }  
    } else if (prop == 'tens') {
      let currVal = Number.parseInt(numSplit[prop]
                                   .toString()
                                   .slice(0,1));
      if (currVal < 4) {
        for (let i=0; i < currVal; i++) {
          romanNumTens += romanSymbols[2];
        } 
      } else if (currVal == 4) {
          romanNumTens = romanSymbols[2] + romanSymbols[3];
      } else if (currVal > 4 && currVal < 9) {
          romanNumTens = romanSymbols[3];
          for (let i=5; i < currVal; i++) {
            romanNumTens += romanSymbols[2];
          }
      } else {
          romanNumTens = romanSymbols[2] + romanSymbols[4];
      }  
    } else if (prop == 'hundreds') {
      let currVal = Number.parseInt(numSplit[prop]
                                   .toString()
                                   .slice(0,1));
      if (currVal < 4) {
        for (let i=0; i < currVal; i++) {
          romanNumHundreds += romanSymbols[4];
        } 
      } else if (currVal == 4) {
          romanNumHundreds = romanSymbols[4] + romanSymbols[5];
      } else if (currVal > 4 && currVal < 9) {
          romanNumHundreds = romanSymbols[5];
          for (let i=5; i < currVal; i++) {
            romanNumHundreds += romanSymbols[4];
          }
      } else {
          romanNumHundreds = romanSymbols[4] + romanSymbols[6];
      }  
    } else if (prop == 'thousands') {
      let currVal = Number.parseInt(numSplit[prop]
                                   .toString()
                                   .slice(0,1));
      for (let i=0; i < currVal; i++) {
        romanNumThousands += romanSymbols[6];
      }
    }
  }
  let finalRomanNumeral = romanNumThousands + romanNumHundreds + romanNumTens + romanNumOnes;
  return finalRomanNumeral
}

convertToRoman(36);