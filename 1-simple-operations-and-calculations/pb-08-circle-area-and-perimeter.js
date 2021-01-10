//PB-08. Circle Area and Perimeter

function circle(r) {
    r = Number(r);
    calculatedArea = Math.PI * (r * r);
    calculatedParameter = 2 * Math.PI * r;

    console.log(calculatedArea.toFixed(2));
    console.log(calculatedParameter.toFixed(2));
}

circle(3);
