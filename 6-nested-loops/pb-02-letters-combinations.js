//PB-02. Letters Combinations

function letters(input) {
    let first = input[0];
    let second = input[1];
    let third = input[2];
    let print1 = "";
    let print2 = "";
    let print3 = "";
    let printLine = "";
    let count = 0;

    for (let i = Number(first.charCodeAt(0)); i <= Number(second.charCodeAt(0)); i++) {
        let letter1 = String.fromCharCode(i)
        if (letter1 === third) {
            continue;
        } else {
            print1 = letter1;
        }
        for (let j = Number(first.charCodeAt(0)); j <= Number(second.charCodeAt(0)); j++) {
            let letter2 = String.fromCharCode(j)
            if (letter2 === third) {
                continue;
            } else {
                print2 = letter2;
            }
            for (let k = Number(first.charCodeAt(0)); k <= Number(second.charCodeAt(0)); k++) {
                let letter3 = String.fromCharCode(k)
                if (letter3 === third) {
                    continue;
                } else {
                    print3 = letter3
                }
                printLine += ("" + print1 + "" + print2 + "" + print3 + " ")
                count++;
            }

        }

    }
    console.log(`${printLine}${count}`)
}

letters(["a", "c", "z",])
