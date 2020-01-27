function telephoneCheck(str) {
  str = str.replace(/\s+/g, '');
  
  let hasTenDigits = false;
  let hasElevenDigits = false;
  let startsWithOne = false;
  let containsNotOnlyDigits = false;
  let correctParentheses = false;
  let correctDashes = false;
  
  let numsInStr = str
                    .match(/\d+/g)
                    .join('');
  
  if (numsInStr.length == 10) {
    hasTenDigits = true;
  } else if (numsInStr.length == 11) {
    hasElevenDigits = true;
  }
  
  if (numsInStr[0] == 1) {
    startsWithOne = true;
  }
  
  let regexParentheses = /[()]+/g;
  if (regexParentheses.test(str)) {
    containsNotOnlyDigits = true;
  }
  
  let regexDashes = /[-]+/g;
  if (regexDashes.test(str)) {
    containsNotOnlyDigits = true;
  }
  
  if (startsWithOne == true) {
    let slicedOneStr = str.slice(1);
    if (slicedOneStr[0] == "(" && slicedOneStr[4] == ")" && slicedOneStr[8] == "-") {
      correctParentheses = true;
    }
    if (slicedOneStr[3] == "-" && slicedOneStr[7] == "-") {
      correctDashes = true;
    }
	
  } else {
    if (str[0] == "(" && str[4] == ")" && str[8] == "-") {
      correctParentheses = true;
    }
    if (str[3] == "-" && str[7] == "-") {
      correctDashes = true;
    }
  }
  
  if (!hasTenDigits && !hasElevenDigits) {
    return false;
  } else if (hasElevenDigits && !startsWithOne) {
    return false;
  } else if (containsNotOnlyDigits && !correctParentheses && !correctDashes) {
    return false;
  } else {
    return true;
  }
}

telephoneCheck("555-555-5555");