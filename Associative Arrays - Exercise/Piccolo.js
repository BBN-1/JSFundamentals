function piccolo(array) {
    let map = new Map();
    let count = 1;
    let isEmpty = false
  
    for (let line of array) {
      line = line.split(", ");
      let plateNumber = line[1];
      let movement = line[0];
  
     if(movement === 'IN'){
         map.set(plateNumber)
     } else if (movement === 'OUT'){
        map.delete(plateNumber);
     }
    }
    let sortedPlates = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));
    if(sortedPlates.length <= 0){
        console.log("Parking Lot is Empty");
    } else {
    for (let line of sortedPlates) {
      console.log(line[0]);
    }
  }
  }
