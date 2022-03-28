function solve(group, type, day) {

    //let group = Number(input[0]);
    //let type = input[1];
    // let day = input[2];

    let price = 0;


    if (type === `Students`) {
        if (day === `Friday`) {
            price = group * 8.45;
        } else if (day === `Saturday`) {
            price = group * 9.80
        } else if (day === `Sunday`) {
            price = group * 10.46
        }
    }
    if (type === `Students`) {
        if (group >= 30) {
            price = price * 0.85
        }
    }

    if (type === `Business`) {
        if (day == `Friday `) {
            price = group * 10.90;
        } else if (day === `Saturday`) {
            price = group * 15.60;
        } else if (day === `Sunday`) {
            price = group * 16;
        }
    }
    if (type === `Business` && group >= 100) {
        if (day === `Friday`) {
            price = price - (10 * 10.90)
        } else if (day === `Saturday`) {
            price = price - (10 * 15.60)
        } else if (day === `Sunday`) {
            price = price - (10 * 16)
        }
    }

    if (type === `Regular`) {
        if (day === `Friday`) {
            price = group * 15;
        } else if (day === `Saturday`) {
            price = group * 20;
        } else if (day === `Sunday`) {
            price = group * 22.50
        }
    }

    if (type === `Rеgular`) {
        if (group >= 10 && group <= 20) {
            price = price * 0.95
        }
    }


    console.log(`Total price: ${price.toFixed(2)}`)


}
