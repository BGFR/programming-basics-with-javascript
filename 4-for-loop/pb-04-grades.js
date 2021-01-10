//PB-04. Grades 

function grades(input) {
    let count = Number(input[0]);
    g5 = 0;
    g4 = 0;
    g3 = 0;
    g2 = 0;
    avG = 0;

    for (let i = 1; i <= count; i++) {
        let grade = Number(input[i]);
        if (grade >= 2 && grade < 3) {
            g2 += 1;
        } else if (grade >= 3 && grade < 4) {
            g3 += 1;
        } else if (grade >= 4 && grade < 5) {
            g4 += 1;
        } else {
            g5 += 1;
        }
        avG += grade;
    }
    console.log(`Top students: ${((g5 / count) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((g4 / count) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((g3 / count) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((g2 / count) * 100).toFixed(2)}%`);
    console.log(`Average: ${(avG / count).toFixed(2)}`);
}

grades(["10", "3.00", "2.99", "5.68", "3.01", "4", "4", "6.00", "4.50", "2.44", "5"]);
grades(["6", "2", "3", "4", "5", "6", "2.2"]);
