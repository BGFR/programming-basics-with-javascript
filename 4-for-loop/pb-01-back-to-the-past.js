//PB-01. Back To The Past
function backToPast(input) {
    money = Number(input[0]);
    year = Number(input[1]);
    let age = 17;
    for (let i = 1800; i <= year; i++) {
      if (i % 2 == 0) {
        money -= 12000;
      } else {
        age += 2;
        money -= 12000 + 50 * age;
      }
    }
    if (money >= 0) {
      console.log(
        `Yes! He will live a carefree life and will have ${money.toFixed(
          2
        )} dollars left.`
      );
    } else {
      console.log(
        `He will need ${Math.abs(money).toFixed(2)} dollars to survive.`
      );
    }
  }
  
  backToPast(["50000", "1802"]);
  backToPast(["100000.15", "1808"]);
  
