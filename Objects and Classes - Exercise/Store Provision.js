function store(instock, ordered) {
  let store = [];

  for (let i = 0; i < instock.length; i += 2) {
    let product = instock[i];
    let quantity = +instock[i + 1];

    let productObj = {
      name: product,
      quantity,
    };
    store.push(productObj);
  }

  for (let i = 0; i < ordered.length; i += 2) {
    let product = ordered[i];
    let quantity = +ordered[i + 1];
    let productObj = {
      name: product,
      quantity,
    };

    let productIndex = store.findIndex((x) => x.name === product);
    if (productIndex === -1) {
      store.push(productObj);
    } else {
      store[productIndex].quantity += quantity;
    }
  }

  for (const products of store) {
      console.log(`${products.name} -> ${products.quantity}`);
  }

}
