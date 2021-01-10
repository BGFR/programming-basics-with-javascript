//06. Histogram
function histogram(input) {
    let n = Number(input[0]);
    p = 0;
    p1 = 0;
    p2 = 0;
    p3 = 0;
    p4 = 0;
    p5 = 0;

    for (let i = 1; i <= n; i++) {
        let number = Number(input[i]);
        if (number < 200) {
            p1 += 1;
        } else if (number >= 200 && number < 400) {
            p2 += 1;
        } else if (number >= 400 && number < 600) {
            p3 += 1;
        } else if (number >= 600 && number < 800) {
            p4 += 1;
        } else {
            p5 += 1;
        }
        p += 1;
    }
    console.log(`${((p1 / p) * 100).toFixed(2)}%`);
    console.log(`${((p2 / p) * 100).toFixed(2)}%`);
    console.log(`${((p3 / p) * 100).toFixed(2)}%`);
    console.log(`${((p4 / p) * 100).toFixed(2)}%`);
    console.log(`${((p5 / p) * 100).toFixed(2)}%`);
}

histogram(["3", "1", "2", "999"]);
histogram(["7", "800", "801", "250", "199", "399", "599", "799"]);
histogram(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"]);
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])
