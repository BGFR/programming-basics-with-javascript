//PB-04. Car Number

function carNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let d1 = 0;
    let d2 = 0;
    let d3 = 0;
    let d4 = 0;
    let currentNum = 0;
    let printLine = "";

    for (let i = start; i <= end; i++) {
        d1 = i;
        for (let j = start; j <= end; j++) {
            d2 = j;
            for (let k = start; k <= end; k++) {
                d3 = k;
                for (let l = start; l <= end; l++) {
                    d4 = l;
                    currentNum = Number(`${d1}${d2}${d3}${d4}`);
                    if ((d1 % 2 === 0 && d4 % 2 !== 0) || (d1 % 2 !== 0 && d4 % 2 === 0)) {
                        if (d1 > d4 && ((d2 + d3)) % 2 === 0) {
                            printLine += currentNum + " ";
                        }
                    }
                }
            }
        }
    }

    console.log(printLine);
}


carNumber(["3", "5"]);
