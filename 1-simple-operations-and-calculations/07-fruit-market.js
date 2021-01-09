  //07. Fruit Market 
  function fruitMarket(strawberPrice, bananaKg, portoKg, crenbKg, straberKg) {
    strawberPrice = Number(strawberPrice);
    bananaKg = Number(bananaKg);
    portoKg = Number(portoKg);
    crenbKg = Number(crenbKg);
    straberKg = Number(straberKg);
    crenPrice = strawberPrice * 0.5;
    portoPrice = crenPrice * 0.6;
    bananaPrice = crenPrice * 0.2;
    money =
      strawberPrice * straberKg +
      bananaKg * bananaPrice +
      portoKg * portoPrice +
      crenPrice * crenbKg;
    console.log(money);
  }
  
  fruitMarket("48", "10", "3.3", "6.5", "1.7");
