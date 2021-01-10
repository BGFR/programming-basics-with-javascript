//PB-06. Wedding Seats

function weddingSeats(input) {
    let lastSector = input[0];
    let rowsFirstSector = Number(input[1]);
    let seats = Number(input[2]);
    let sectorLetter = "";
    let rowNumber = "";
    let seatLetter = "";
    let count = 0;

    for (let i = 65; i <= Number(lastSector.charCodeAt(0)); i++) {
        let sector = String.fromCharCode(i);
        sectorLetter = sector;
        for (let j = 1; j <= rowsFirstSector; j++) {
            rowNumber = j;
            if (j % 2 === 0) {
                seats += 2;
            } else {
                seats = Number(input[2]);
            }
            for (let k = 1; k <= seats; k++) {
                let seatOdd = String.fromCharCode(k + 96);
                let seatEven = String.fromCharCode(k + 96);
                if (k % 2 !== 0) {
                    seatLetter = seatOdd;
                } else {
                    seatLetter = seatEven;
                }
                count++;
                console.log(`${sectorLetter}${rowNumber}${seatLetter}`)

            }
        }
        rowsFirstSector++;
    }
    console.log(`${count}`)
}

weddingSeats(["B", "3", "2"])
