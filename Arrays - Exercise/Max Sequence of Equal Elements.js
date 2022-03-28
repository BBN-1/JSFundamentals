function longest(arr) {
  let array = arr;
  let arrayL = array.length;
  let sequence = [];

  for (let i = 0; i < arrayL; i++) {
    let element = array[i];
    let newSequence = [element];

    for (let j = i + 1; j < arrayL; j++) {
      if (element === array[j]) {
        newSequence.push(element);
      } else {
          break
      }
    }

    if (sequence.length < newSequence.length) {
      sequence = newSequence;
    }
  }

  let output = sequence.join(" ");
  console.log(output);
}
