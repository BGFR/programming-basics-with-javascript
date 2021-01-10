//PB-08. Fuel Tank - Part 2
function fuelTankTwo(fuelType, liters, card) {
    liters = Number(liters);
    let price = 0;

    switch (fuelType) {
        case "Gas":
            price = liters * 0.93;
            if (card === "Yes") {
                price -= liters * 0.08;
            }
            break;
        case "Gasoline":
            price = liters * 2.22;
            if (card === "Yes") {
                price -= liters * 0.18;
            }
            break;
        case "Diesel":
            price = liters * 2.33;
            if (card === "Yes") {
                price -= liters * 0.12;
            }
            break;
    }

    if (liters >= 20 && liters <= 25) {
        price *= 0.92;
    } else if (liters > 25) {
        price *= 0.9;
    }
    console.log(`${price.toFixed(2)} lv.`);
}
fuelTankTwo("Gas", "30", "Yes");
fuelTankTwo("Gasoline", "25", "No");
fuelTankTwo("Diesel", "19", "No");
