function race(arr) {
  let participantObj = {};
  let result = {};
  updatedArray = [];

  let participants = arr.shift().split(", ");

  let participantsData = arr.splice(0, arr.length - 1);
  let regEx1 = /[^a-zA-Z0-9]/g;
  let regExDigits = /[^A-Za-z]+/g;
  let regExLetter = /[A-Za-z]+/g;

  for (let i = 0; i < participantsData.length; i++) {
    let currentDataLine = participantsData[i];
    let newLine = currentDataLine.replace(regEx1, "");
    updatedArray.push(newLine);
  }

  for (let i = 0; i < updatedArray.length; i++) {
    let currentLine = updatedArray[i];
    let digits = currentLine.replace(regExLetter, "").split("");
    
    let name = currentLine.replace(regExDigits, "");

    if (!participantObj.hasOwnProperty(name) && participants.includes(name)) {
      participantObj[name] = [];
      participantObj[name].push(digits);
    } else if (
      participantObj.hasOwnProperty(name) &&
      participants.includes(name)
    ) {
      participantObj[name].push(digits);
    }
  }

  for (let [name, points] of Object.entries(participantObj)) {
    result[name] = 0;

    for (const iterator of points) {
        
        let newArrNum = iterator.map((x) => Number(x))
        let reducer = (a, b) => a + b; 
        let currentReduce = newArrNum.reduce(reducer)
        result[name] += currentReduce
      
    }
  }

  let sortedArr = Object.entries(result).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i <= 2; i++) {
      
      if(i === 0){
        console.log(`1st place: ${sortedArr[i][0]}`);
      } else if ( i === 1){
        console.log(`2nd place: ${sortedArr[i][0]}`);
      }else if (i === 2){
        console.log(`3rd place: ${sortedArr[i][0]}`);
      }
    
 
}
}
