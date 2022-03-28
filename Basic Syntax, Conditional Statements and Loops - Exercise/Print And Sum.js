function solve(num1, num2) {
    let sum = 0;
    let numToPrint = ``

    for (let i = num1; i <= num2; i++) {
        numToPrint += i +` `
        sum += i;

    }
    console.log(numToPrint)
    console.log(`Sum: ${sum}`)






}
