//PB-05. Game Of Intervals
function gameOfIntervals(input) {
    let moves = input[0];
    let points = 0;
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;
    let e = 0;
    let f = 0;
    for (let i = 1; i <= moves; i++) {
        let result = input[i];
        if (result >= 0 && result < 10) {
            points += 0.2 * result;
            a += 1;
        } else if (result >= 10 && result < 20) {
            points += 0.3 * result;
            b += 1;
        } else if (result >= 20 && result < 30) {
            points += 0.4 * result;
            c += 1;
        } else if (result >= 30 && result < 40) {
            points += 50;
            d += 1;
        } else if (result >= 40 && result <= 50) {
            points += 100;
            e += 1;
        } else if (result < 0 || result > 50) {
            points /= 2;
            f += 1;
        }
    }
    console.log(points.toFixed(2));
    console.log(`From 0 to 9: ${((a / moves) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((b / moves) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((c / moves) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((d / moves) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((e / moves) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((f / moves) * 100).toFixed(2)}%`);
}

gameOfIntervals(["10", "43", "57", "-12", "23", "12", "0", "50", "40", "30", "20"]);
gameOfIntervals([3, 12, -23, 46]);
