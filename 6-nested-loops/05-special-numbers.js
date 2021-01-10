//05. Special Numbers

function specialNums(input) {
    let n = Number(input[0]);
    let specialNum = "";

    for (let i = 1111; i < 9999; i++) {
        let num = "" + i;
        let count = 0;
        for (let j = 0; j <= 3; j++) {
            let digit = Number(num.charAt(j));
            if (n % digit === 0) {
                count += 1;
            }
        }
        if (count === 4) {
            specialNum += num + " ";
        }
    }
    console.log(specialNum);
}

specialNums(["3"]);
specialNums(["11"]);
specialNums(["16"]);
