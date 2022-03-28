function strSubstring(word, text) {
  let searchedWord = word.toLowerCase();
  let textAsArray = text.split(" ");
  let isFound = false;

  for (let i = 0; i < textAsArray.length; i++) {
    let currentWord = textAsArray[i].toLowerCase();

    if (currentWord === searchedWord) {
      console.log(searchedWord);
       isFound = true
     
    }
  }

  if (!isFound) {
    console.log(`${searchedWord} not found!`);
  }
}
