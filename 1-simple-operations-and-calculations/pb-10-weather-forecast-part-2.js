//PB-10. Weather Forecast - Part 2 

function weatherForecast(input) {
    let degrees = Number(input);

    if (degrees >= "26" && degrees <= "35") {
        console.log("Hot");
    } else if (degrees <= "25.9" && degrees >= "20.1") {
        console.log("Warm");
    } else if (degrees <= "20" && degrees >= "15") {
        console.log("Mild");
    } else if (degrees <= "14.9" && degrees >= "12.0") {
        console.log("Cool");
    } else if (degrees >= "5" && degrees <= "11.9") {
        console.log("Cold");
    } else {
        console.log("unknown");
    }
}
weatherForecast("38");
