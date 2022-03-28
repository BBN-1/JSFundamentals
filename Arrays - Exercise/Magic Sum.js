function magic(arr, num) {

  let array = arr;
  let arrayL = array.length;
  let number = num;

  for (let i = 0; i < arrayL; i++) {
    let firstNum = array[i];

    for (let j = i + 1; j < arrayL; j++) {
      let secondNum = array[j];

      if (firstNum + secondNum === number) {
        console.log(`${firstNum} ${secondNum}`);
      }
    }
  }
}
