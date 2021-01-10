//PB-08. Fuel Tank

function fuelTank(fuel, liters) {
    liters = Number(liters);
    let fuelType = false;

    if (fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") {
        fuelType = true;
    } else {
        console.log(`Invalid fuel!`);
    }

    if (liters >= 25 && fuelType === true) {
        console.log(`You have enough ${fuel.toLowerCase()}.`);
    } else {
        if (liters < 25 && fuelType === true) {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        }
    }
}

fuelTank("diesel", 10);
fuelTank("gasoline", 40);
fuelTank("gas", 25);
fuelTank("kerosene", 200);
