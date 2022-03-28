function area(arr) {
  let array = arr;
  let newArr = [];

  for (let elements of array) {
    if (!newArr.includes(elements)) {
      newArr.push(elements);
    } else {
      continue;
    }
  }

  console.log(newArr.join(" "));
}
