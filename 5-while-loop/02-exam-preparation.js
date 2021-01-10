//02. Exam Preparation
function examPreparation(input) {
    let mark = Number(input.shift());
    let index = 0;
    let task = input[index];
    let avScore = 0;
    let needBreak = false;
    let poor = 0;
    while (task != "Enough") {
        score = Number(input[index + 1]);
        avScore += score;
        if (score <= 4) {
            poor += 1;
            if (mark === poor) {
                needBreak = true;
                break;
            }
        }
        index += 2;
        task = input[index];
    }

    if (needBreak == true) {
        console.log(`You need a break, ${mark} poor grades.`);
    } else {
        console.log(
            `Average score: ${(avScore / (index / 2)).toFixed(
                2
            )}\nNumber of problems: ${index / 2}\nLast problem: ${input[index - 2]}`
        );
    }
}
examPreparation(["3", "Money", "6", "Story", "4", "Spring Time", "5", "Bus", "6", "Enough"]);
examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"]);
