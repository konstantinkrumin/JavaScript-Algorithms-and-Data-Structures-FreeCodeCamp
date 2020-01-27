function palindrome(str) {
	str = str.trim().toLowerCase();
	let regex = /[a-z0-9+]/g;
	let regexMatch = str.match(regex);
	let strRegex = regexMatch.join('');
	
	var reverseOrdCharsArray = [];
	for (let k=0; k < strRegex.length; k++) {
		let character = strRegex.charAt(k);
		reverseOrdCharsArray.unshift(character);
	}
  
	let reverseStr = "";
	reverseStr = reverseOrdCharsArray.join('');
  
	if (strRegex == reverseStr) {
		return true;
	} else {
		return false;
	}
}

