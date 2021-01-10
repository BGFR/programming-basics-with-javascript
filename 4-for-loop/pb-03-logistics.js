//PB-03. Logistics

function logistics(input) {
    let cargo = Number(input[0]);
    let priceBus = 200;
    let priceTruck = 175;
    let priceTrain = 120;
    let bus = 0;
    let truck = 0;
    let train = 0;
    let totalCargo = 0;

    for (let i = 1; i <= cargo; i++) {
        let num = Number(input[i]);
        totalCargo += num;
        if (num <= 3) {
            bus += num;
        } else if (num > 3 && num < 12) {
            truck += num;
        } else {
            train += num;
        }
    }
    console.log(
        `${(
            (bus * priceBus + truck * priceTruck + train * priceTrain) /
            totalCargo
        ).toFixed(2)}`
    );
    console.log(`${((bus / totalCargo) * 100).toFixed(2)}%`);
    console.log(`${((truck / totalCargo) * 100).toFixed(2)}%`);
    console.log(`${((train / totalCargo) * 100).toFixed(2)}%`);
}

logistics(["4", "1", "5", "16", "3"]);
