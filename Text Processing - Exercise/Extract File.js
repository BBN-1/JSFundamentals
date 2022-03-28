function extractFile(str) {
  let strAsArray = str.split("\\");

  let lastString = strAsArray.pop();
  let lastAsArray = lastString.split(".");

  console.log(`File name: ${lastAsArray[0]}`);
  console.log(`File extension: ${lastAsArray[lastAsArray.length - 1]}`);
}
