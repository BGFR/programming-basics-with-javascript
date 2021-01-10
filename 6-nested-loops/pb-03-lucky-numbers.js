//PB-03. Lucky Numbers 

function luckyNums(input) {
    let num = Number(input[0]);
    let d1 = 0;
    let d2 = 0;
    let d3 = 0;
    let d4 = 0;
    let currentNum = 0;
    let printLine = "";

    for (let i = 1; i <= 9; i++) {
        d1 = i;
        for (let j = 1; j <= 9; j++) {
            d2 = j;
            for (let k = 1; k <= 9; k++) {
                d3 = k;
                for (let l = 1; l <= 9; l++) {
                    d4 = l;
                    currentNum = Number(`${d1}${d2}${d3}${d4}`)
                    if (d1 + d2 === d3 + d4) {
                        if (num % (d1 + d2) === 0) {
                            printLine += currentNum + " ";
                        }
                    }
                }
            }
        }
    }

    console.log(printLine)

}

luckyNums(["24"])
