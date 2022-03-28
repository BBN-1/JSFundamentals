function testString(num) {
  let numStr = num.toString();
  let numStrL = numStr.length;
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < numStrL; i++) {
    let current = Number(numStr[i]);
    if (current % 2 === 0) {
      evenSum += current;
    } else {
      oddSum += current;
    }
  }


  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}
