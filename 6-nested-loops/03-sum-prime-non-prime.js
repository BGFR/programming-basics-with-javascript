//03. Sum Prime Non Prime 

function sumPrime(input) {
    let index = 0;
    let stop = input[index++];
    let prime = 0;
    let nonPrime = 0;
    while (stop !== "stop") {
        let num = Number(stop);
        let count = 0;
        if (num < 0) {
            console.log(`Number is negative.`);
        } else if (num === 1) {
            prime += num;
        } else {
            for (let i = 1; i <= num; i++) {
                if (num % i === 0) {
                    count++;
                }
            }

            if (count === 2) {
                prime += num;
            } else {
                nonPrime += num;
            }
        }

        stop = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${prime}`);
    console.log(`Sum of all non prime numbers is: ${nonPrime}`);
}

sumPrime(["3", "9", "0", "7", "19", "4", "stop"]);
sumPrime(["30", "83", "33", "-1", "20", "stop"]);
sumPrime(["0", "-9", "0", "stop"]);
