//06. Godzilla vs. Kong

function solve(budget, statist, clothesPrice) {
    budget = Number(budget)
    statist = Number(statist)
    clothesPrice = Number(clothesPrice)

    if (statist >= 150) {
        clothesPrice = 0.9 * clothesPrice
        if (budget * 0.9 >= clothesPrice * statist) {
            console.log("Action!\nWingard starts filming with " + (budget * 0.9 - clothesPrice * statist).toFixed(2) + " leva left.")
        } else {
            console.log("Not enough money!\nWingard needs " + (clothesPrice * statist - budget * 0.9).toFixed(2) + " leva more.")
        }
    } else {
        if (budget * 0.9 >= clothesPrice * statist) {
            console.log("Action!\nWingard starts filming with " + (budget * 0.9 - clothesPrice * statist).toFixed(2) + " leva left.")
        } else {
            console.log("Not enough money!\nWingard needs " + (clothesPrice * statist - budget * 0.9).toFixed(2) + " leva more.")
        }
    }
}
solve("9587.88", "222", "55.68");
