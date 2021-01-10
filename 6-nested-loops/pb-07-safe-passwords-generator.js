//PB-07. Safe Passwords Generator

function safePassGen(input) {
    let d1 = Number(input[0]);
    let d2 = Number(input[1]);
    let max = Number(input[2]);
    let print1 = "";
    let print2 = "";
    let print3 = "";
    let print4 = "";
    let printLine = "";
    let count = 0;
    let countfor3 = 0;
    let isBigger = false;

    for (let i = 35; i <= 55; i++) {
        print1 = String.fromCharCode(i);
        for (let j = 64; j <= 96; j++) {
            print2 = String.fromCharCode(j);
            for (let k = 1; k <= d1; k++) {
                print3 = k;
                countfor3++;
                if (countfor3 > d1) {
                    isBigger = true;
                    break;
                }
                for (let l = 1; l <= d2; l++) {
                    print4 = l;
                    count++;
                    if (count > max) {
                        isBigger = true;
                        break;
                    }
                    print1 = String.fromCharCode(i++);
                    if (i > 55) {
                        i = 35
                    }
                    print2 = String.fromCharCode(j++);
                    if (j > 96) {
                        j = 64
                    }
                    printLine += print1 + print2 + print3 + print4 + print2 + print1 + "|"
                }
            }
        }
        if (isBigger) {
            break;
        }
    }
    console.log(printLine)
}

safePassGen(["2", "3", "10"]);
safePassGen(["20", "50", "200"]);
