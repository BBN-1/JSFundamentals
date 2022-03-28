function bomb(arr, barr) {
  let array = arr;

  let bombNumber = barr[0];
  let bombPower = barr[1];

  while (array.includes(bombNumber)) {
    let bombIndex = array.indexOf(bombNumber);
    let elementsToRemove = bombPower * 2 + 1;
    let startIndex = bombIndex - bombPower;

    if (startIndex < 0) {
      startIndex = 0;
    }

    array.splice(startIndex, elementsToRemove);
  }
  let sum = 0;

  for (let elements of array) {
    sum += elements;
  }

  console.log(sum);
}
