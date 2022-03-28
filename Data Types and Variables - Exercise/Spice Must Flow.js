function solve(yield) {


    let totalAmount = 0;
    days = 0;


    for (let i = yield; i >= 100; i -= 10) {


        totalAmount += i;

        if (totalAmount > 26) {
            totalAmount = totalAmount - 26;
        }
        days++

    }


    if (totalAmount > 26) {
    totalAmount = totalAmount - 26;
    }

    console.log(days);
    console.log(totalAmount);






 

}
