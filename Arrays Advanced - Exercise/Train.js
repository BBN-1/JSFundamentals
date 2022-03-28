function train(arr) {
  let array = arr;
  let train = array.shift().split(" ").map(Number);
  let maxCapacity = +array.shift();

  for (const commands of array) {
    let tokens = commands.split(" ");
    let command = tokens[0];

    if (command === "Add") {
      train.push(+tokens[1]);
    } else {
      for (let i = 0; i < train.length; i++) {
        if (train[i] + Number(tokens[0]) <= maxCapacity) {
          train[i] += Number(tokens[0]);
          break;
        }
      }
    }
  }

  console.log(train.join(' '));
}
