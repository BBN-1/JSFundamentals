function perfect(num) {

  let number = num;
  let arrayDividers = [];

  for (let i = 1; i < number; i++) {
    let divider = i;

    if (num % divider === 0) {
      arrayDividers.push(divider);
    }
  }

let sumDividers = 0
for (const dividers of arrayDividers) {
    sumDividers+= dividers
}

if (number === sumDividers){
    console.log('We have a perfect number!')
} else {
    console.log("It's not so perfect.");
}

}
