function equal(arr) {
  let array = arr;
  let arrayL = array.length;

  let isEqual = false;

  for (let i = 0; i < arrayL; i++) {
    let leftSum = 0;
    let rightSum = 0;

    

    for (let j = i + 1; j < arrayL; j++) {
      rightSum += array[j];
    }

    for (let l = 0; l < i; l++) {
      leftSum += array[l];
    }

    if (rightSum === leftSum) {
      isEqual = true;
      console.log(i);
    }
  }
  if (!isEqual) {
    console.log("no");
  }
}
