function revealWords(str, text) {
  let wordsAsArray = str.split(", ");
  let textAsArray = text.split(" ");

 
  for (let i = 0; i < wordsAsArray.length; i++) {
    for (let j = 0; j < textAsArray.length; j++) {
      if (
        wordsAsArray[i].length === textAsArray[j].length &&
        textAsArray[j].includes("*")
      ) {
        textAsArray[j] = wordsAsArray[i];
      }
    }
  }
  console.log(textAsArray.join(" "));
}
