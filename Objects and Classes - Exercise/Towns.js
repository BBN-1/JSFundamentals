function townsMe(array) {
  for (let line of array) {
    let [town, latitude, longitude] = line.split(" | ");

    let towns = {
      town,
      latitude: (+latitude).toFixed(2),
      longitude: (+longitude).toFixed(2),
    };

    console.log(towns);
  }
}
