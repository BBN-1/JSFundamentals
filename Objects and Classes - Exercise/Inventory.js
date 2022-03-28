function inventory(array) {
  let heroes = [];

  for (let line of array) {
    let [name, level, items] = line.split(" / ");

    let hero = {
      name,
      level: +level,
      items: items.split(", ").sort((a, b) => a.localeCompare(b)),
    };

    heroes.push(hero);
  }
  let sortedHeroes = heroes.sort((a, b) => a.level - b.level);

  for (let line of sortedHeroes) {
    console.log(`Hero: ${line.name}`);
    console.log(`level => ${line.level}`);
    console.log(`items => ${line.items.join(', ')}`);
  }
}
