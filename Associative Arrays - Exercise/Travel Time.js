function travelTime(array) {
  let list = {};

  for (let line of array) {
    let tokens = line.split(" > ");
    let country = tokens[0];
    let city = tokens[1];
    let price = Number(tokens[2]);

    if (!list.hasOwnProperty(country)) {
      list[country] = {};
    }
    if (!list[country].hasOwnProperty(city)) {
      list[country][city] = price;
    }

    if (list[country][city] > price) {
      list[country][city] = price;
    }
  }

  let keys = Object.keys(list).sort((a, b) => a[0].localeCompare(b[0]));

  for (let countries of keys) {
    sortedCities = Object.entries(list[countries]).sort((a, b) => a[1] - b[1]);
    let result = [];
    for (let cities of sortedCities) {
      result.push(cities.join(" -> "));
    }
    console.log(`${countries} -> ${result.join(" ")}`);
  }
}
