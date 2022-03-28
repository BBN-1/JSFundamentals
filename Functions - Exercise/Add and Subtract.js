function result(num1, num2, num3) {
  function sumOfTwoNumbers(n1, n2) {
    return n1 + n2;
  }

  function subtract(sum, n3) {
    return sum - n3;
  }

  let sum = sumOfTwoNumbers(num1, num2);
  let result = subtract(sum, num3);

  console.log(result);
}
