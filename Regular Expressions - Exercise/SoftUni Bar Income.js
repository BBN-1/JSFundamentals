function barIncome(arr) {
  let initialArray = arr.slice(0, arr.length - 1);
  let regEx =
    /(?<name>[A-Z][a-z]+)%.*?<(?<product>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>\d+(?:\.\d+)*)\$/g;

  let valid;
  let income = 0;

  while ((valid = regEx.exec(initialArray)) !== null) {
    let customerName = valid.groups["name"];
    let product = valid.groups["product"];
    let price = Number(valid.groups["count"]) * Number(valid.groups["price"]);
    income += price;
    console.log(`${customerName}: ${product} - ${price.toFixed(2)}`);
  }

  console.log(`Total income: ${income.toFixed(2)}`);
}
