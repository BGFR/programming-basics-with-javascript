//PB-08. Secret Door's Lock 

function secretLock(input) {
    let hundreds = Number(input[0]);
    let tens = Number(input[1]);
    let ones = Number(input[2]);
    let print1 = 0;
    let print2 = 0;
    let print3 = 0;

    for (let i = 1; i <= hundreds; i++) {
        if (i % 2 === 0) {
            let one = i;
            print1 = one;
            one = 0
        } else { continue; }
        for (let j = 1; j <= tens; j++) {
            two = j;
            if (j === 2 || j === 3 || j === 5 || j === 7) {
                let two = j;
                print2 = two;
                two = 0
            } else { continue; }
            for (let k = 1; k <= ones; k++) {
                if (k % 2 === 0) {
                    let three = k
                    print3 = three;
                    three = 0;
                } else { continue; } ""
                console.log("" + print1 + " " + print2 + " " + print3)
            }
        }
    }
}

secretLock(["3", "5", "5"]);
secretLock(["8", "2", "8"]);
