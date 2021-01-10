//PB-09. Sum of Two Numbers 

function sumTwoNums(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let count = 0;
    let printLine = "";
    let print = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            if (i + j === magic) {
                printLine += (`${i} + ${j} = ${i + j}`)
                print = true;
                break;
            }
        }
        if (print) {
            break;
        }
    }
    if (print) {
        console.log(`Combination N:${count} (${printLine})`)
    } else {
        console.log(`${count} combinations - neither equals ${magic}`)
    }
}

sumTwoNums(["1", "10", "5"]);
sumTwoNums(["88", "888", "1000"]);
sumTwoNums(["23", "24", "20"]);
sumTwoNums(["88", "888", "2000"]);
