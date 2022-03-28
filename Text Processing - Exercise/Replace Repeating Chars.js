function replacerepeating(str) {
  let strAsArray = str.split("");
  let result = [];
  for (let i = 0; i < strAsArray.length; i++) {
    let currentCh = strAsArray[i];

    if (currentCh !== strAsArray[i + 1]) {
      result.push(currentCh);
    }
  }

  console.log(result.join(""));
}
