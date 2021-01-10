//08. On Time for the Exam

function inTime(exH, exMin, arrH, arrMin) {
    exH = Number(exH);
    exMin = Number(exMin);
    arrH = Number(arrH);
    arrMin = Number(arrMin);
    let exTime = exH * 60 + exMin;
    let arrTime = arrH * 60 + arrMin;
    let difference = exTime - arrTime;

    if (difference < 0) {
        console.log("Late");
        difference = Math.abs(difference);
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = difference % 60;

            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours after the start`);
            } else {
                console.log(`${hours}:${minutes} hours after the start`);
            }
        }
    } else if (difference <= 30) {
        console.log(`On time`);

        if (difference > 0) {
            console.log(`${difference} minutes before the start`);
        }
    } else {
        console.log(`Early`);

        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            let hours = Math.floor(difference / 60);
            let minutes = difference % 60;

            if (minutes < 10) {
                console.log(`${hours}:0${minutes} hours before the start`);
            } else {
                console.log(`${hours}:${minutes} hours before the start`);
            }
        }
    }
}

inTime("9", "30", "9", "50");
inTime("9", "00", "8", "30");
inTime("16", "00", "15", "00");
inTime("9", "00", "10", "30");
inTime("14", "00", "13", "55");
inTime("11", "30", "8", "12");
inTime("10", "00", "10", "00");
inTime("11", "30", "10", "55");
inTime("11", "30", "12", "29");
