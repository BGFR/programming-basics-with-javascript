//PB-13. Prime Pairs

function primePairs(input) {
    let firstPairStart = Number(input[0])
    let secondPairStart = Number(input[1])
    let firstPairEnd = Number(input[2]) + Number(input[0])
    let secondPairEnd = Number(input[3]) + Number(input[1])
    let count1 = 0;
    let count2 = 0;

    for (let i = firstPairStart; i <= firstPairEnd; i++) {
        for (let k = 1; k <= i; k++) {
            if (i % k === 0) {
                count1++;
            }
        }
        for (let j = secondPairStart; j <= secondPairEnd; j++) {
            for (let l = 1; l <= j; l++) {
                if (j % l === 0) {
                    count2++;
                }
            }
            if (count1 === 2 && count2 === 2) {
                console.log(`${i}${j}`);
            }
            count2 = 0;
        }
        count1 = 0;
    }
}

primePairs(["10", "20", "5", "5"]);
