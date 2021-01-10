//PB-05. Firm

function firm(reqH, days, workers) {
    reqH = Number(reqH);
    days = Number(days);
    workers = Number(workers);
    let workHours = (days * 0.9 * 8 + workers * (2 * days)).toFixed(0);

    if (workHours >= reqH) {
        a = workHours - reqH;
        console.log(`Yes!${a} hours left.`);
    } else {
        b = reqH - workHours;
        console.log(`Not enough time!${b} hours needed.`);
    }
}
firm(99, 3, 1);
