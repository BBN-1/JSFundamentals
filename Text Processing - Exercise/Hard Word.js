function hardWords(array) {
  let test = [];

  let textToFill = array[0].split(" ");
  let wordsToUse = array[1];

  for (let i = 0; i < wordsToUse.length; i++) {
    for (let j = 0; j < textToFill.length; j++) {
      if (
        textToFill[j].length === wordsToUse[i].length &&
        textToFill[j].includes("_")
      ) {
        textToFill[j] = wordsToUse[i];
      }
    }
  }
  console.log(textToFill.join(" "));
}
