//PB-05. Average Number
function averageNumber(input) {
    let n = Number(input[0]);
    let index = 1;
    let total = 0;
    while (index <= n) {
        let num = Number(input[index]);
        total += num;
        index++;
    }
    console.log(`${(total / n).toFixed(2)}`);
}

averageNumber(["4", "3", "2", "4", "2"]);
averageNumber(["2", "6", "4"]);
averageNumber(["3", "82", "43", "22"]);
averageNumber(["4", "95", "23", "76", "23"]);
