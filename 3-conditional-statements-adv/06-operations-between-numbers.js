//06. Operations Between Numbers
function operationsNums(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    result = 0;
    let num;

    if (operator === "+") {
        result = n1 + n2;
    } else if (operator === "-") {
        result = n1 - n2;
    } else if (operator === "*") {
        result = n1 * n2;
    } else if (operator === "/") {
        result = n1 / n2;
    } else {
        result = n1 % n2;
    }

    if (result % 2 == 0) {
        num = "even";
    } else {
        num = "odd";
    }

    if (operator == "+" || operator == "-" || operator == "*") {
        console.log(`${n1} ${operator} ${n2} = ${result} - ${num}`);
    } else if (n2 == 0 && (operator == "/" || operator === "%")) {
        console.log(`Cannot divide ${n1} by zero`);
    } else if (operator == "%") {
        console.log(`${n1} ${operator} ${n2} = ${result}`);
    } else {
        console.log(`${n1} ${operator} ${n2} = ${result.toFixed(2)}`);
    }
}

operationsNums("10", "12", "+");
operationsNums("10", "1", "-");
operationsNums("7", "3", "*");
operationsNums("123", "12", "/");
operationsNums("10", "3", "%");
operationsNums("112", "0", "/");
operationsNums("10", "0", "%");
operationsNums("10", "3", "/");
