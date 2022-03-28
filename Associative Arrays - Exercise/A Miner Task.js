function miner(array) {
  let resourceList = {};
  let test = [];

  for (let i = 0; i < array.length; i += 2) {
    let product = array[i];

    if (!resourceList.hasOwnProperty(product)) {
      resourceList[product] = Number(array[i + 1]);
    } else {
      let currentQuantity = resourceList[product];
      let updatedQuantity = currentQuantity + Number(array[i + 1]);
      resourceList[product] = updatedQuantity;
    }
  }
  for (let key in resourceList) {
    console.log(`${key} -> ${resourceList[key]}`);
  }
}
