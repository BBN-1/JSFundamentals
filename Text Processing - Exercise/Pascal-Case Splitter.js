function pascalSplitter(str) {



  let strToSplit = str;

  let newText = strToSplit.match(/[A-Z][a-z]+/g);
  console.log(newText.join(", "));
}
