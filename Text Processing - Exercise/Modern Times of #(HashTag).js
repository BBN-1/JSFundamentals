function modernTimes(str) {
  let text = str.split(" ");

  for (let i = 0; i < text.length; i++) {
    let currentWord = text[i];

    if (currentWord.length > 1 && currentWord[0] === "#") {
      let wordOnly = currentWord.substring(1);
      if (/^[a-zA-Z]+$/.test(wordOnly)) {
        console.log(wordOnly);
      }
    }
  }
}
