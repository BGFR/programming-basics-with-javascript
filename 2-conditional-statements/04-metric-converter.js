//04. Metric Converter

function solve(input1, input2, input3) {
    input1 = Number(input1);
    input2 = input2
    input3 = input3
    if (input2 == "mm" && input3 == "m") {
        console.log((input1 / 1000).toFixed(3))
    } else if (input2 == "mm" && input3 == "cm") {
        console.log((input1 / 10).toFixed(3))
    } else if (input2 == "m" && input3 == "cm") {
        console.log((input1 * 100).toFixed(3))
    } else if (input2 == "m" && input3 == "mm") {
        console.log((input1 * 1000).toFixed(3))
    } else if (input2 == "cm" && input3 == "mm") {
        console.log((input1 * 10).toFixed(3))
    } else if (input2 == "cm" && input3 == "m") {
        console.log((input1 / 100).toFixed(3))
    }
}
solve("45", "cm", "mm");
