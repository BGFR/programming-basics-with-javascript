//PB-02. Report System

function reportSystem(input) {
    let ammount = Number(input[0]);
    let index = 1;
    let value = input[index];
    let cash = 0;
    let cashCount = 0;
    let cc = 0;
    let ccCount = 0;
    let success = false;
    while (value !== "End") {
        let price = Number(value);
        if ((price < 10 && index % 2 == 0) || (price > 100 && index % 2 !== 0)) {
            console.log(`Error in transaction!`)
        } else if (price <= 100 && index % 2 !== 0) {
            cash += price;
            cashCount += 1;
            console.log(`Product sold!`)
        } else if (price >= 10 && index % 2 == 0) {
            cc += price;
            ccCount += 1;
            console.log(`Product sold!`)
        }

        if (cash + cc >= ammount) {
            success = true;
            break;
        }

        index++;
        value = input[index];
    }

    if (success === true) {
        console.log(`Average CS: ${(cash / cashCount).toFixed(2)}\nAverage CC: ${(cc / ccCount).toFixed(2)}`)
    } else {
        console.log(`Failed to collect required money for charity.`)
    }
}

reportSystem(["500", "120", "8", "63", "256", "78", "317"]);
reportSystem(["600", "86", "150", "98", "227", "End"]);
