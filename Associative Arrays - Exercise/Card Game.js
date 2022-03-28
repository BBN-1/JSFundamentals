function cardGame(array) {
  let playerList = {};
  let symbolToNumber = { J: 11, Q: 12, K: 13, A: 14, S: 4, H: 3, D: 2, C: 1 };
  let results = {};

  for (let line of array) {
    let entries = line.split(": ");
    let playerName = entries[0];
    let cards = entries[1].split(", ");

    for (let pulledCard of cards) {
      if (!Object.keys(playerList).includes(playerName)) {
        playerList[playerName] = [];
        playerList[playerName].push(pulledCard);
      } else {
        if (!playerList[playerName].includes(pulledCard)) {
          playerList[playerName].push(pulledCard);
        }
      }
    }
  }

  for (let [name, cards] of Object.entries(playerList)) {
    results[name] = 0;

    for (let currentCard of cards) {
      let cardsAsArray = currentCard.split("");
      let type = cardsAsArray.pop();
      let power = cardsAsArray.join("");
      let currentPoints = 0;

      if (Object.keys(symbolToNumber).includes(power)) {
        currentPoints = symbolToNumber[power] * symbolToNumber[type];
      } else {
        currentPoints = Number(power) * symbolToNumber[type];
      }

      results[name] += currentPoints;
    }
  }

  for (let key in results) {
    console.log(`${key}: ${results[key]}`);
  }
}
