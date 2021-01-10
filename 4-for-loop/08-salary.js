//08. Salary

function salary(input) {
    let tab = Number(input[0]);
    let sallary = Number(input[1]);

    for (let i = 2; i < input.length; i++) {
        let page = input[i];
        if (page === "Facebook") {
            sallary -= 150;
        } else if (page === "Instagram") {
            sallary -= 100;
        } else if ((page = "Reddit")) {
            sallary -= 50;
        }
    }
    if (sallary <= 0) {
        console.log("You have lost your salary.");
    } else {
        console.log(sallary);
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"]);
