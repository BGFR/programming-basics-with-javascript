//PB-04. Transport Price

function transportPrice(n, input) {
    n = Number(n);
    let period = input;
    taxiDay = 0.7 + 0.79 * n;
    taxiNight = 0.7 + 0.9 * n;
    bus = 0.09 * n;
    train = 0.06 * n;
    if (n < 20 && period === "day") {
        price = taxiDay;
        console.log(price.toFixed(2));
    } else if (n < 20 && period === "night") {
        price = taxiNight;
        console.log(price.toFixed(2));
    } else if (n >= 20 && n < 100) {
        price = bus;
        console.log(price.toFixed(2));
    } else if (n >= 100) {
        price = train;
        console.log(price.toFixed(2));
    }
}
transportPrice("180", "night");
