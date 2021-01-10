//PB-12. The song of the wheels
function songWheels(input) {
    let num = Number(input[0])
    printLine = ""
    let count = 0;
    let password = 0;
    let isFound = false;

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {
                    if (i * j + k * l === num && i < j && k > l) {
                        printLine += (`${i}${j}${k}${l} `)
                        count++;
                        if (count === 4) {
                            password = ("" + i + j + k + l);
                            isFound = true;
                        }
                    }
                }
            }
        }
    }
    if (count > 0) {
        console.log(printLine)
    }
    if (isFound) {
        console.log(`Password: ${password}`)
    } else {
        console.log("No!")
    }
}

songWheels(["1391"]);
