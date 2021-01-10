// PB-10. Multiply by 2
function multiplyByTwo(...input) {
    let sum = 0;
    for (let i of input) {
        if (i < 0) {
            console.log(`Negative number!`);
            break;
        } else {
            sum = i * 2;
            console.log(`Result: ${sum.toFixed(2)} `);
        }
    }
}

multiplyByTwo("23.43", "12.3245", "0", "65.23432", "23", "65", "-12");
multiplyByTwo("-123");
