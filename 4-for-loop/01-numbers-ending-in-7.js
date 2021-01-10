//01. Numbers Ending in 7
function endingSeven() {
    for (let i = 7; i <= 1000; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}
endingSeven();
