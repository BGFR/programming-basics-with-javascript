//08. Scholarship 

function solve(income, avGrade, minSal) {
    income = Number(income);
    avGrade = Number(avGrade);
    minSal = Number(minSal);
    socialGrant = (0.35 * minSal);
    scholarship = (avGrade * 25);

    if (avGrade < 4.5) {
        console.log("You cannot get a scholarship!")
    }

    if (avGrade < 5.5 && avGrade >= 4.5) {
        if (income < minSal) {
            console.log("You get a Social scholarship " + (Math.floor(socialGrant)) + " BGN");
        } else if (income > minSal) {
            console.log("You cannot get a scholarship!")
        }
    } else if (avGrade >= 5.5) {
        if (scholarship > socialGrant) {
            console.log("You get a scholarship for excellent results " + (Math.floor(scholarship)) + " BGN")
        } else if (scholarship < socialGrant) {
            console.log("You get a Social scholarship " + (Math.floor(socialGrant)) + " BGN");
        }
    }

}

solve("300.00", "5.65", "420.00")
