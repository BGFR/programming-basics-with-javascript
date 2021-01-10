//09. Volleyball

function volleyball(year, p, h) {
    p = Number(p);
    h = Number(h);
    let sofia = (48 - h) * 0.75;
    let holidays = (p * 2) / 3;
    let games = sofia + holidays + h;

    if (year === "leap") {
        games *= 1.15;
        console.log(`${Math.floor(games)}`);
    } else {
        console.log(`${Math.floor(games)}`);
    }
}

volleyball("leap", "5", "2");
volleyball("normal", "3", "2");
