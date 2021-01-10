//01. Cinema

function cinema(type, r, c) {
    r = Number(r);
    c = Number(c);
    let ticket = 0;
    profit = r * c * ticket;

    if (type === "Premiere") {
        ticket += 12;
    } else if (type === "Normal") {
        ticket += 7.5;
    } else if (type === "Discount") {
        ticket += 5;
    }
    console.log(profit);
}

cinema("Premiere", "10", "12");
cinema("Normal", "21", "13");
cinema("Discount", "12", "30");
