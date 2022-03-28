function wordTracker(array) {
  let wordList = array.shift().split(" ");

  let map = new Map();
  let count = 0;

  for (let givenWord of wordList) {
    map.set(givenWord, count);

    for (let exactWord of array) {
      if (givenWord === exactWord) {
        let currentCount = map.get(givenWord);
        let updatedCount = currentCount + 1;
        map.set(givenWord, updatedCount);
      }
    }
  }

  let sortedWordCount = Array.from(map).sort((a, b) => b[1] - a[1]);

  for (let entries of sortedWordCount) {
    console.log(`${entries[0]} - ${entries[1]}`);
  }
}
