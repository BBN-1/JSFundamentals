function oddOccurances(string) {
  
  let oddList = {}
  let count = 1;

  let wordsArray = string.split(" ");

  for (let word of wordsArray) {
    let givenWord = word.toLowerCase();

    if (!oddList.hasOwnProperty(givenWord)) {
      oddList[givenWord] = count
    } else  {
      let currentCount = oddList[givenWord];
      let updatedCount = currentCount + 1;

      oddList[givenWord] = updatedCount
    }
  }
 
  let line = "";

  for (let key of Object.keys(oddList)) {
    
    let count = oddList[key];

    if (count % 2 !== 0) {
      line += key + " ";
    }
  }

  console.log(line);
}
