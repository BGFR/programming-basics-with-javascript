//PB-08. Equal Pairs

function equalPairs(input) {
    let n = Number(input[0]);
    let firstNum = 0;
    let secondNum = 0;
    let sum = 0;
    let maxDiff = 0;
    let difference = 0;
    let value = false;
    firstNum = +input[1] + +input[2];
    if (n > 1) {
        for (let i = 3; i <= 2 * n; i += 2) {
            secondNum = +input[i] + +input[i + 1];
            if (firstNum === secondNum) {
                value = true;
                sum = firstNum;
            } else {
                difference = Math.abs(+input[i - 2] + +input[i - 1] - secondNum);
                if (difference > maxDiff) {
                    maxDiff = difference;
                }
            }
        }
    } else {
        sum = firstNum;
        value = true;
    }
    if (value === true) {
        console.log(`Yes, value=${sum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs(["3", "1", "2", "0", "3", "4", "-1"]);
equalPairs(["4", "1", "1", "3", "1", "2", "2", "0", "0"]);
equalPairs(["2", "-1", "0", "0", "-1"]);
equalPairs(["2", "1", "2", "2", "2"]);
equalPairs(["1", "5", "5"]);
equalPairs(["2", "-1", "2", "0", "-1"]);
