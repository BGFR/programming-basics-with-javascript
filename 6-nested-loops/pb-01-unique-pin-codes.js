//PB-01. Unique PIN Codes

function uniquePins(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let third = Number(input[2]);
    let currentNum1 = 0;
    let currentNum2 = 0;
    let currentNum3 = 0;

    for (let i = 1; i <= first; i++) {
        if (i % 2 === 0) {
            currentNum1 = i;
        } else {
            continue;
        }
        for (let j = 1; j <= second; j++) {
            if (j === 2 || j === 3 || j === 5 || j === 7) {
                currentNum2 = j;
            } else {
                continue;
            }
            for (let k = 1; k <= third; k++) {
                if (k % 2 === 0) {
                    currentNum3 = k;
                } else {
                    continue;
                }
                console.log("" + currentNum1 + " " + currentNum2 + " " + currentNum3);
            }

        }

    }


}

uniquePins(["3", "5", "5"]);
uniquePins(["8", "2", "8"]);
