//04. Factorial

function factorial(n) {
    n = Number(n);
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total *= i;
    }
    console.log(total);
}
factorial(8);
