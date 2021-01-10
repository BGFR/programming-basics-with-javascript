//05. Coins

function coins(input = []) {
    let change = Number(input[0] * 100);
    change = Math.floor(change);
    let index = 1;
    let coins = 0;

    while (change !== 0) {
        if (change >= 200) {
            change -= 200;
            coins += 1;
        } else if (change >= 100) {
            change -= 100;
            coins += 1;
        } else if (change >= 50) {
            change -= 50;
            coins += 1;
        } else if (change >= 20) {
            change -= 20;
            coins += 1;
        } else if (change >= 10) {
            change -= 10;
            coins += 1;
        } else if (change >= 5) {
            change -= 5;
            coins += 1;
        } else if (change >= 2) {
            change -= 2;
            coins += 1;
        } else if (change >= 1) {
            change -= 1;
            coins += 1;
        }
        index++;
    }
    console.log(coins);
}
coins(["1.23"]);
coins(["2"]);
coins(["0.56"]);
coins(["2.73"]);
coins(["3"]);
