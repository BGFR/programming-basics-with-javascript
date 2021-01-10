//04. Fishing Boat
function fishingBoat(budget, season, fisherMen) {
    budget = Number(budget);
    fisherMen = Number(fisherMen);
    let springBoat = 3000;
    let summerAutumnBoat = 4200;
    let winterBoat = 2600;
    let price = 0;

    if (season === "Spring") {
        price += springBoat;
    } else if (season === "Summer" || season === "Autumn") {
        price += summerAutumnBoat;
    } else {
        price += winterBoat;
    }

    if (fisherMen <= 6) {
        price *= 0.9;
    } else if (fisherMen >= 7 && fisherMen <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }

    if (season !== "Autumn" && fisherMen % 2 === 0) {
        price *= 0.95;
    }

    let difference = Math.abs(price - budget).toFixed(2);

    if (budget >= price) {
        console.log(`Yes! You have ${difference} leva left.`);
    } else {
        console.log(`Not enough money! You need ${difference} leva.`);
    }
}

fishingBoat("3000", "Summer", "11");
fishingBoat("3600", "Autumn", "6");
fishingBoat("2000", "Winter", "13");
