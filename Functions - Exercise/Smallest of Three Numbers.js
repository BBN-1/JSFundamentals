function smallest(num1, num2, num3) {
  let minNumber = Number.MAX_SAFE_INTEGER;
  let newArr = [num1, num2, num3];
  let newArrL = newArr.length;

  for (let i = 0; i < newArrL; i++) {
    let currentNum = Number(newArr[i]);
    if (minNumber > currentNum) {
      minNumber = currentNum;
    }
  }

  console.log(minNumber);
}
