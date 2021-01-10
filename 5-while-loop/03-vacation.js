//03. Vacation

function vacation(input) {
    let tripPrice = Number(input[0]);
    let totalMoney = Number(input[1]);
    let index = 2;
    let spends = 0;
    let days = 0;
    let cannotSave = false;
    while (totalMoney < tripPrice) {
        let action = input[index];
        index++;
        let money = Number(input[index]);
        if (action === "save") {
            totalMoney += money;
            spends = 0;
        } else if (action === "spend") {
            totalMoney -= money;
            spends += 1;
            if (totalMoney < 0) {
                totalMoney = 0;
            }
        }

        index++;
        days += 1;

        if (spends === 5) {
            cannotSave = true;
            break;
        }
    }
    if (cannotSave === true) {
        console.log(`You can't save the money.\n${days}`);
    } else {
        console.log(`You saved the money for ${days} days.`);
    }
}
vacation(["2000", "1000", "spend", "1200", "save", "2000"]);
vacation(["110", "60", "spend", "10", "spend", "10", "spend", "10", "spend", "10", "spend", "10"]);
vacation(["250", "150", "spend", "50", "spend", "50", "save", "100", "save", "100"]);
vacation(["2000", "1000", "save", "1000"]);
