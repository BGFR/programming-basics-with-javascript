//PB-11. HappyCat Parking 

function happyCatParking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let dayCount = 0;
    let price = 0;
    let totalPrice = 0;

    for (let i = 1; i <= days; i++) {
        dayCount++;
        for (let j = 1; j <= hours; j++) {
            if (i % 2 !== 0 && j % 2 === 0) {
                price += 1.25;
            } else if (i % 2 === 0 && j % 2 !== 0) {
                price += 2.50;
            } else {
                price += 1;
            }
        }
        console.log(`Day: ${dayCount} - ${(price).toFixed(2)} leva`)
        totalPrice += price;
        price = 0;
    }
    console.log(`Total: ${(totalPrice).toFixed(2)} leva`)
}

happyCatParking(["2", "5"]);
happyCatParking(["5", "2"]);
