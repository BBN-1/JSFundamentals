function rotate(arr, num) {
  let array = arr;
  let rotations = num;

  for (let i = 0; i < rotations; i++) {
    let elementToMove = array.shift();
    array.push(elementToMove);
  }

  let result = array.join(" ");

  console.log(result);
}
