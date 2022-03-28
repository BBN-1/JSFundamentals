function top(arr) {
  let array = arr;
  let arrayL = array.length;
  let resultingArray = [];

  //let isBigger = true;

  for (let i = 0; i < arrayL; i++) {
    let currentNum = array[i];
    let rightElements = array.slice(i + 1);
    let isBigger = true;
    let rightElementsL = rightElements.length;

    for (let j = 0; j < rightElementsL; j++) {
      if (currentNum <= rightElements[j]) {
        isBigger = false;
        break;
      }
    }

    if (isBigger) {
      resultingArray.push(currentNum);
    }
  }

  let result = resultingArray.join(" ");
  console.log(result);
}
