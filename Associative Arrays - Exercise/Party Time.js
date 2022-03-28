function partyTime(array) {
  let digitList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let indexOfParty = array.indexOf("PARTY");
  let regList = [];
  let vipList = [];

  for (let i = 0; i < indexOfParty; i++) {
    let currentGuest = array[i];

    if (digitList.includes(currentGuest[0])) {
      vipList.push(currentGuest);
    } else {
      regList.push(currentGuest);
    }
  }

  for (let i = indexOfParty + 1; i < array.length; i++) {
    if (vipList.includes(array[i])) {
      vipList.splice(vipList.indexOf(array[i]), 1);
    } else if (regList.includes(array[i])) {
      regList.splice(regList.indexOf(array[i]), 1);
    }
  }
  let numberOfGuest = vipList.length + regList.length;

  console.log(numberOfGuest);
  for (const iterator of vipList) {
    console.log(iterator);
  }
  for (const iterator of regList) {
    console.log(iterator);
  }
}
