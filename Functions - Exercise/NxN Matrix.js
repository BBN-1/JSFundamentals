function matrix(num) {
  let number = num;
  let rowFunction = (number) => {
    let result = "";
    for (let r = 0; r < number; r++) {
      result += `${number} `;
    }
    return result;
  };

  for (let c = 0; c < number; c++) {
    console.log(rowFunction(number));
  }
}
