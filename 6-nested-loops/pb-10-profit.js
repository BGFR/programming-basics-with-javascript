//PB-10. Profit 
function profit(input) {
    let oneLev = Number(input[0]);
    let twoLeva = Number(input[1]);
    let fiveLeva = Number(input[2]);
    let ammount = Number(input[3]);
    let one = 0;
    let two = 0;
    let five = 0;
    for (let i = 0; i <= oneLev; i++) {
        one = i;
        for (let j = 0; j <= twoLeva; j++) {
            two = j;
            for (let k = 0; k <= fiveLeva; k++) {
                five = k;
                if (one + two * 2 + five * 5 === ammount)
                    console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${ammount} lv.`)
            }
        }
    }

}
profit(["3", "2", "3", "10"]);
profit(["5", "3", "1", "7"]);
