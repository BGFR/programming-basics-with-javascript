//PB-07. Flower Shop

function flowerShop(f1, f2, f3, f4, giftPrice) {
    f1 = Number(f1);
    f2 = Number(f2);
    f3 = Number(f3);
    f4 = Number(f4);
    giftPrice = Number(giftPrice);
    f1Price = Number(3.25);
    f2Price = Number(4);
    f3Price = Number(3.5);
    f4Price = Number(8);
    profit = (f1 * f1Price + f2 * f2Price + f3 * f3Price + f4 * f4Price) * 0.95;

    if (profit >= giftPrice) {
        a = Math.floor(profit - giftPrice);
        console.log(`She is left with ${a} leva.`);
    } else {
        b = Math.ceil(giftPrice - profit);
        console.log(`She will have to borrow ${b} leva.`);
    }
}
flowerShop("2", "3", "5", "1", "50");
flowerShop("15", "7", "5", "10", "100");
