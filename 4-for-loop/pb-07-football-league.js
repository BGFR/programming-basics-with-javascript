//PB-07. Football League 

function footballLeague(input) {
    let seats = Number(input[0]);
    let fans = Number(input[1]);
    a = 0;
    b = 0;
    v = 0;
    g = 0;
    all = 0;

    for (let i = 0; i <= fans + 1; i++) {
        let sector = input[i];
        switch (sector) {
            case "A":
                a += 1;
                break;
            case "B":
                b += 1;
                break;
            case "V":
                v += 1;
                break;
            case "G":
                g += 1;
                break;
        }
    }
    console.log(`${((a / fans) * 100).toFixed(2)}%`);
    console.log(`${((b / fans) * 100).toFixed(2)}%`);
    console.log(`${((v / fans) * 100).toFixed(2)}%`);
    console.log(`${((g / fans) * 100).toFixed(2)}%`);
    console.log(`${((fans / seats) * 100).toFixed(2)}%`);
}

footballLeague(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
footballLeague(["93", "16", "A", "V", "G", "G", "B", "B", "G", "B", "A", "B", "B", "B", "A", "B", "B", "A"]);
footballLeague(["1000", "12", "A", "A", "V", "V", "A", "G", "A", "A", "V", "G", "V", "A"]);
