//04. Walking

function walking(input) {
    let index = 0;
    let value = input[index];
    let steps = 0;
    while (steps < 10000) {
        if (value === "Going home") {
            index++;
            let homeSteps = Number(input[index]);
            steps += homeSteps;
            break;
        } else {
            let stepsMade = Number(value);
            steps += stepsMade;
        }
        index++;
        value = input[index];
    }
    let goal = Math.abs(10000 - steps);
    if (steps < 10000) {
        console.log(`${goal} more steps to reach goal.`);
    } else {
        console.log(`Goal reached! Good job!\n${goal} steps over the goal!`);
    }
}

walking(["1000", "1500", "2000", "6500"]);
walking(["1500", "3000", "250", "1548", "2000", "Going home", "2000"]);
walking(["1500", "300", "2500", "3000", "Going home", "200"]);
walking(["125", "250", "4000", "30", "2678", "4682"]);
