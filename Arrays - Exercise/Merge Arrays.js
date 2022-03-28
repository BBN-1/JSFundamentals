function merge(arr1, arr2) {


    let newArr = []
    let holder = ``

    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            holder = Number(arr1[i]) + Number(arr2[i])

        } else {
            holder = arr1[i] + arr2[i]

        }

        newArr.push(holder)

    }

    console.log(newArr.join(` - `));





}
