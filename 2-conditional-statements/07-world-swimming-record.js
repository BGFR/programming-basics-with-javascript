//07. World Swimming Record

function solve(recScnd, distMtrs, timePM) {
    recScnd = Number(recScnd);
    distMtrs = Number(distMtrs);
    timePM = Number(timePM);
    time = (distMtrs * timePM + (Math.floor(distMtrs / 15) * 12.5)).toFixed(2);
    if (time >= recScnd) {
        console.log("No, he failed! He was " + ((time - recScnd) + " seconds slower.")
    } else {
        console.log("Yes, he succeeded! The new world record is " + time + " seconds.")
    }
}

solve("55555.67", "3017", "5.03");
