function houseParty1(arr) {
  let list = [];

  for (const elements of arr) {
    let tokens = elements.split(" ");
    let name = tokens[0];
    let command = tokens.slice(1).join(" ");

    if (command === "is going!") {
      if (!list.includes(name)) {
        list.push(name);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else if (command === "is not going!") {
      if (!list.includes(name)) {
        console.log(`${name} is not in the list!`);
      } else {
        let index = list.indexOf(name);
        list.splice(index, 1);
      }
    }
  }

  console.log(list.join("\n"));
}
