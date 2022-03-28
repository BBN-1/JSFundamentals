function solve(arr) {


    let sumOrig = 0
    let sumModif = 0
    let newArr = []

    for (const elements of arr) {
        sumOrig += Number(elements)
    }


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] = arr[i] + i

        } else {
            arr[i] = arr[i] - i

        }
        newArr.push(arr[i])
    }

    for (const elements of newArr) {
        sumModif += elements
    }

    console.log(newArr)
    console.log(sumOrig)
    console.log(sumModif)


}
