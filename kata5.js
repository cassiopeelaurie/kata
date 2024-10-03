function isLetterInAlphabet(letter) {
    return letter.toLowerCase() !== letter.toUpperCase();
  }
  
  function shiftLetter(letter, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const letterLower = letter.toLowerCase();
    const index = alphabet.indexOf(letterLower);
  
    if (index === -1) {
      return letter; // Return non-alphabetic characters unchanged
    }
  
    // Shift the index and wrap around if necessary
    let newIndex = (index + key) % 26;
    if (newIndex < 0) {
      newIndex += 26; // Ensure the index is positive
    }
  
    const shiftedLetter = alphabet[newIndex];
  
    // Maintain original case
    return letter === letterLower ? shiftedLetter : shiftedLetter.toUpperCase();
  }
  

function codeCesar(message, key, isDecoding) {
  return message
    .split("")
    .map(function (letter) {
      if (!isLetterInAlphabet(letter)) {
        return letter;
      }
      return shiftLetter(letter, isDecoding ? -key : key);
    })
    .join("");
}

console.log(codeCesar("coucou", 3, false));
