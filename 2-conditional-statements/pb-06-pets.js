//PB-06. Pets

function pets(days, foodKg, dogFoodKg, catFoodKg, turtleFoodGr) {
    days = Number(days);
    foodKg = Number(foodKg);
    dogFoodKg = Number(dogFoodKg);
    catFoodKg = Number(catFoodKg);
    turtleFood = Number(turtleFoodGr / 1000);
    reqFood = Number(days * dogFoodKg + days * catFoodKg + days * turtleFood);

    if (foodKg >= reqFood) {
        a = Math.floor(foodKg - reqFood);
        console.log(`${a} kilos of food left.`);
    } else {
        b = Math.ceil(reqFood - foodKg);
        console.log(`${b} more kilos of food are needed.`);
    }
}
pets("2", "10", "1", "1", "1200");
pets("5", "10", "2.1", "0.8", "321");
