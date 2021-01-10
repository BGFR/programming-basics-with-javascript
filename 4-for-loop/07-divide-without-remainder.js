//07. Divide Without Remainder

function divide(input) {
    let n = Number(input[0]);
    p = 0;
    p1 = 0;
    p2 = 0;
    p3 = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        if (num % 2 === 0) {
            p1++;
        }
        if (num % 3 === 0) {
            p2++;
        }
        if (num % 4 === 0) {
            p3++;
        }
        p++;
    }

    console.log(`${((p1 / p) * 100).toFixed(2)}%`);
    console.log(`${((p2 / p) * 100).toFixed(2)}%`);
    console.log(`${((p3 / p) * 100).toFixed(2)}%`);
}

divide(["10", "680", "2", "600", "200", "800", "799", "199", "46", "128", "65"]);
divide(["3", "3", "6", "9"]);
