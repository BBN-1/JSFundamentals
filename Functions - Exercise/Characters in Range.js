function inrange(char1, char2) {
  let char1AsNumber = char1.charCodeAt(0);
  let char2AsNumber = char2.charCodeAt(0);
  let smallerNum = Math.min(char1AsNumber, char2AsNumber);
  let biggerNumber = Math.max(char1AsNumber, char2AsNumber);

  let result = [];

  for (let i = smallerNum + 1; i < biggerNumber; i++) {
    let currentLet = String.fromCharCode(i);
    result.push(currentLet);
  }

  console.log(result.join(" "));
}
