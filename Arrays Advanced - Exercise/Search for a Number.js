function search(integers, commands) {
  let toTakeNum = commands[0];
  let toDelete = commands[1];
  let searchedNum = commands[2];

  let resultArr = integers.slice(0, toTakeNum);
  resultArr.splice(0, toDelete);

  let count = 0;
  for (const elements of resultArr) {
    if (elements === searchedNum) {
      count++;
    }
  }

  console.log(`Number ${searchedNum} occurs ${count} times.`);
}
