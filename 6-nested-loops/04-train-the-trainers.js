//04. Train The Trainers 
function train(input) {
    let judge = input[0];
    let index = 1;
    let finalAssesment = 0;
    let counter = 0;

    let course = input[index++];
    while (course !== "Finish") {
        let courseMark = 0;
        for (let i = 1; i <= judge; i++) {
            let mark = Number(input[index++]);
            courseMark += mark;
            finalAssesment += mark;
            counter += 1;
        }
        console.log(`${course} - ${(courseMark / judge).toFixed(2)}.`);
        course = input[index++];
    }
    console.log(
        `Student's final assessment is ${(finalAssesment / counter).toFixed(2)}.`
    );
}

train([
    "2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"
]);
train([
    "3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"
]);
train([
    "2",
    "Objects and Classes",
    "5.77",
    "4.23",
    "Dictionaries",
    "4.62",
    "5.02",
    "RegEx",
    "2.88",
    "3.42",
    "Finish"
]);
