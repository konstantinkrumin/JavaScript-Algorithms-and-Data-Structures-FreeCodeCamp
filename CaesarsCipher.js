function rot13(str) {
  let decryptedStr = "";
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const shiftedAlphabet = alphabet.substring(13) + alphabet.substring(0, 13);
  
  for (let i=0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) != -1) {
      let currIndex = shiftedAlphabet.indexOf(str[i]);
      decryptedStr += alphabet[currIndex];
    } else {
      decryptedStr += str[i];
    }
  }
  return decryptedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");