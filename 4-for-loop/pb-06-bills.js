//PB-06. Bills 
function bills(input) {
    let months = Number(input[0]);
    water = 20;
    net = 15;
    el = 0;

    for (let i = 1; i <= months; i++) {
        elmoney = Number(input[i]);
        el += elmoney;
    }

    others = ((water + net) * months + el) * 1.2;

    console.log(`Electricity: ${el.toFixed(2)} lv`);
    console.log(`Water: ${(water * months).toFixed(2)} lv`);
    console.log(`Internet: ${(net * months).toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(
        `Average: ${(
            (el + water * months + net * months + others) /
            months
        ).toFixed(2)} lv`
    );
}

bills(["5", "68.63", "89.25", "132.53", "93.53", "63.22"]);
bills(["8", "123.54", "231.54", "140.23", "100", "122.4", "430", "178.52", "64.2"]);
