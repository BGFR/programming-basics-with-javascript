//05. Time + 15 Minutes
function solve(hour, minute) {
    hour = Number(hour);
    minute = Number(minute) + 15;
    if (minute >= 60) {
        hour += 1;
        minute -= 60;
    }
    if (hour > 23) {
        hour -= 24
    }
    if (minute < 9) {
        console.log(`${hour}:0${minute}`)
    } else {
        console.log(`${hour}:${minute}`)
    }
}
solve("23", "59");
