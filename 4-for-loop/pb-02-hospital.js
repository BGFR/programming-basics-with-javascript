//PB-02. Hospital
function hospital(input) {
    let period = Number(input[0]);
    let treated = 0;
    let untreated = 0;
    let doctors = 7;

    for (let i = 1; i <= period; i++) {
        let pacients = Number(input[i]);
        if (i % 3 === 0 && untreated > treated) {
            doctors += 1;
        }
        if (pacients <= doctors) {
            treated += pacients;
        } else {
            treated += doctors;
            untreated += pacients - doctors;
        }
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}
hospital(["4", "7", "27", "9", "1"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);
hospital(["3", "7", "7", "7"]);
