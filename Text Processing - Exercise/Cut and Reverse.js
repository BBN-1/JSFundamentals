function cutAndReverse(str) {
  let strAsArray = str.split("");
  let middleCh = strAsArray.length / 2;
  let firstArray = strAsArray.splice(0, middleCh);
  let secondArray = strAsArray;
  let reversedSecond = secondArray.reverse();
  let firstReversed = firstArray.reverse();

  console.log(firstReversed.join(""));
  console.log(reversedSecond.join(""));
}
