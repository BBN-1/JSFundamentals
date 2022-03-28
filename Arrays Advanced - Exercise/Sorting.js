function sorting(arr) {
  let array = arr;
  array.sort((a, b) => a - b);
  let sorted = [];

  while (array.length > 0) {
    sorted.push(array.pop());
    sorted.push(array.shift());
  }

  console.log(sorted.join(" "));
}
