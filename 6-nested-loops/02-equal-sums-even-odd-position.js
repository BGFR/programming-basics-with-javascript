//02. Equal Sums Even Odd Position 
function evenOdd(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let printLine = "";
    for (let i = first; i <= second; i++) {
        let currentNum = "" + i;
        let oddSum = 0;
        let evenSum = 0;

        for (let j = 0; j <= currentNum.length; j++) {
            let currentDigit = Number(currentNum.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum) {
            printLine += `${i} `;
        }
    }

    console.log(printLine);
}

evenOdd(["100000", "100050"]);
evenOdd(["123456", "124000"]);
evenOdd(["299900", "300000"]);
evenOdd(["100115", "100120"]);
