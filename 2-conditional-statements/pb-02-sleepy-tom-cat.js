//PB-02. Sleepy Tom Cat

function sleepyCat(daysOff) {
    daysOff = Number(daysOff);
    totalPlay = Number(30000);
    play = daysOff * 127 + (365 - daysOff) * 63;

    if (play > totalPlay) {
        difference = play - totalPlay;
        hours = Math.floor(difference / 60);
        minutes = difference % 60;
        console.log("Tom will run away");
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        difference = totalPlay - play;
        hours = Math.floor(difference / 60);
        minutes = difference % 60;
        console.log("Tom sleeps well");
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
}
sleepyCat(20);
