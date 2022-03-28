function palindrome1(arr) {
  let array = arr;
  let arrayL = array.length;

  let isPalindrom = (num) => {
    let current = num;
    let reverseCurrent = current.toString().split("").reverse().join("");

    if (current === Number(reverseCurrent)) {
      return "true";
    } else {
      return "false";
    }
  }


for (let i = 0; i < arrayL; i++) {
  let currentEl = array[i];
  console.log(isPalindrom(currentEl));
}
}
