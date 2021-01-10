//03. Leap years

function leapYears(high, year) {
    high = Number(high);
    year = Number(year);
    for (let i = high; i <= year; i += 4) {
        console.log(i);
    }
}

leapYears("1908", "1919");
leapYears("2000", "2011");
leapYears("1584", "1597");
leapYears("2020", "2032");
