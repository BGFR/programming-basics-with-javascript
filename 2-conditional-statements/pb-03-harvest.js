//PB-03. Harvest
function harvest(x, y, z, workers) {
    x = Number(x);
    y = Number(y);
    z = Number(z);
    workers = Number(workers);
    let grapes = (0.4 * (x * y)) / 2.5;

    if (z > grapes) {
        wine = z - grapes;
        console.log(
            `It will be a tough winter! More ${Math.floor(wine)} liters wine needed.`
        );
    } else {
        wine = grapes - z;
        perPerson = wine / workers;
        console.log(
            `Good harvest this year! Total wine: ${Math.floor(grapes)} liters.`
        );
        console.log(
            `${Math.ceil(wine)} liters left -> ${Math.ceil(
                perPerson
            )} liters per person.`
        );
    }
}
harvest("650.5", "2", "175.5", "4.5");
harvest("1020.5", "1.5", "425.5", "4.5");
