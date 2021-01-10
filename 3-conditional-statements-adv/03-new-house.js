//03. New House

function newHouse(flowers, count, budget) {
    count = Number(count);
    budget = Number(budget);
    let price;

    switch (flowers) {
        case "Roses":
            price = 5 * count;

            if (count > 80) {
                price = 0.9 * price;
            }
            break;
        case "Dahlias":
            price = 3.8 * count;

            if (count > 90) {
                price = 0.85 * price;
            }
            break;
        case "Tulips":
            price = 2.8 * count;
            if (count > 80) {
                price = 0.85 * price;
            }
            break;
        case "Narcissus":
            price = 3 * count;
            if (count < 120) {
                price = 1.15 * price;
            }
            break;
        case "Gladiolus":
            price = 2.5 * count;
            if (count < 80) {
                price = 1.2 * price;
            }
            break;
    }

    if (budget >= price) {
        console.log(
            `Hey, you have a great garden with ${count} ${flowers} and ${(
                budget - price
            ).toFixed(2)} leva left.`
        );
    } else {
        console.log(
            `Not enough money, you need ${(price - budget).toFixed(2)} leva more.`
        );
    }
}
newHouse("Roses", "55", "250");
newHouse("Tulips", "88", "260");
newHouse("Narcissus", "119", "360");
