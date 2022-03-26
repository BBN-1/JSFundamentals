function furniture(arr) {
  let storedFurniture = [];
  let furnitureLines = arr.slice(0, arr.length - 1);
  let regEx = /(?<name>[A-Za-z]+)<<(?<price>\d+[^!]*)!(?<quantity>[0-9]+)/g;

  let valid;
  let totalCost = 0;
  while ((valid = regEx.exec(furnitureLines)) !== null) {
    let name = valid.groups["name"];
    let price = Number(valid.groups["price"]);
    let quantity = Number(valid.groups["quantity"]);

    storedFurniture.push(name);
    totalCost += price * quantity;
  }
  console.log("Bought furniture:");
  for (const iterator of storedFurniture) {
    console.log(iterator);
  }

  console.log(`Total money spend: ${totalCost.toFixed(2)}`);
}
