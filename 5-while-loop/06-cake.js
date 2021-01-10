//06. Cake

function cake(input) {
    let w = Number(input[0]);
    let l = Number(input[1]);
    let allPices = w * l;
    let index = 2;
    let value = input[index];
    let total = true;

    while (value !== "STOP") {
        let pieces = Number(value);
        allPices -= pieces;
        if (allPices < 0) {
            allPices = Math.abs(allPices);
            total = false;
            break;
        }
        index++;
        value = input[index];
    }

    if (total === false) {
        console.log(`No more cake left! You need ${allPices} pieces more.`);
    } else {
        console.log(`${allPices} pieces are left.`);
    }
}
cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
