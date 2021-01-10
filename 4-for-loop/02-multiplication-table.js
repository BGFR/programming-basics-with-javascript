//02. Multiplication Table
function multiplicationTable(n) {
    n = Number(n);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${n} = ${i * n}`);
    }
}
solve(multiplicationTable);
