//05. Journey
function journey(budget, season) {
    budget = Number(budget);
    let spend;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                spend = budget * 0.3;
                sleepIn = "Camp";
                break;
            case "winter":
                spend = budget * 0.7;
                sleepIn = "Hotel";
                break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                spend = budget * 0.4;
                sleepIn = "Camp";
                break;
            case "winter":
                spend = budget * 0.8;
                sleepIn = "Hotel";
                break;
        }
    } else {
        destination = "Europe";
        spend = budget * 0.9;
        sleepIn = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${sleepIn} - ${spend.toFixed(2)}`);
}

journey("50", "summer");
journey("75", "winter");
journey("312", "summer");
journey("678.53", "winter");
journey("1500", "summer");
