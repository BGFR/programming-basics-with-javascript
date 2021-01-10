//PB-05. Challenge the Wedding 

function challengeWedding(input) {
    let men = input[0];
    let women = input[1];
    let tables = input[2];
    let m = 0;
    let w = 0;
    let count = 0;
    let printLine = "";

    for (let i = 1; i <= men; i++) {
        let m = i;
        for (let j = 1; j <= women; j++) {
            let w = j;
            count++;
            if (count > tables) {
                break;
            } else {
                printLine += (`(${m} <-> ${w}) `);
            }
        }

    }

    console.log(printLine)
}

challengeWedding(["2", "2", "6"])
challengeWedding(["2", "2", "3"])
challengeWedding(["5", "8", "40"])
