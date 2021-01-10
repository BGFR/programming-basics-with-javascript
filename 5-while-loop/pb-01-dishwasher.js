//PB-01. Dishwasher
function dishwasher(input) {
    let count = Number(input[0]);
    index = 1;
    let value = input[index];
    let volume = 750 * count;
    let enough = true;
    let dishes = 0;
    let pots = 0;
    while (value !== "End") {
        let num = Number(input[index]);
        if ((index) % 3 === 0) {
            pots += num;
            volume -= num * 15;
        } else {
            dishes += num;
            volume -= num * 5;
        }
        if (volume < 0) {
            enough = false;
            break;
        }
        index++;
        value = input[index];
    }

    if (enough === false) {
        console.log(`Not enough detergent, ${Math.abs(volume)} ml. more necessary!`);
    } else {
        console.log(`Detergent was enough!\n${dishes} dishes and ${pots} pots were washed.\nLeftover detergent ${volume} ml.`);
    }
}
dishwasher(["2", "53", "65", "55", "End"]);
dishwasher(["1", "10", "15", "10", "12", "13", "30"]);
