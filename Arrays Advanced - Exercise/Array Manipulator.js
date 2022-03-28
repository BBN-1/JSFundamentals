function arrayManipulator(integers, commandsSupplied) {
  let arrayToModify = integers;
  let commands = commandsSupplied;

  for (let elements of commands) {
    let token = elements.split(" ");
    let command = token[0];

    if (command === "add") {
      let index = +token[1];
      let element = Number(token[2]);
      arrayToModify.splice(index, 0, element);
    } else if (command === "addMany") {
      let index = +token[1];
      token.splice(0, 2);

      let nuumbersToAdd = token.map(Number);
      arrayToModify.splice(index, 0, ...nuumbersToAdd);
    } else if (command === "contains") {
      let element = +token[1];

      console.log(arrayToModify.indexOf(element));
    } else if (command === "remove") {
      let index = +token[1];
      arrayToModify.splice(index, 1);
    } else if (command === "shift") {
      let rotations = +token[1];

      for (let i = 0; i < rotations; i++) {
        let currentNUmber = arrayToModify.shift()
        arrayToModify.push(currentNUmber);
      }
    } else if (command === "sumPairs") {
        
      let result = [];

      if (arrayToModify.length % 2 !== 0) {
        arrayToModify.push(0);
      }

      for (let i = 0; i < arrayToModify.length; i += 2) {
        let sum = arrayToModify[i] + arrayToModify[i + 1];
        result.push(sum);
       }
      arrayToModify = result
    
    } else if (command === "print") {
      console.log(`[ ${arrayToModify.join(", ")} ]`);
      break;
    }
  }
}
