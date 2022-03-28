function extractFile(str) {
  let strAsArray = str.split("\\");

  let lastString = strAsArray.pop();
  let lastAsArray = lastString.split(".");
  let extenstion1 = lastAsArray.pop()

  console.log(`File name: ${lastAsArray.join(".")}`);
  console.log(`File extension: ${extenstion1}`);
}
