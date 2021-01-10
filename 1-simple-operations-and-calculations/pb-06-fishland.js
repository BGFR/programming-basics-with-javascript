  //PB-06. Fishland 
  
  function fishMarket(mackPrice, toyPrice, bonitoKg, hMackKg, shellKg) {
    mackPrice = Number(mackPrice);
    toyPrice = Number(toyPrice);
    bonitoKg = Number(bonitoKg);
    hMackKg = Number(hMackKg);
    shellKg = Number(shellKg);
    bonitoPrice = Number(mackPrice * 1.6);
    hMackPrice = Number(toyPrice * 1.8);
    shellPrice = Number(7.5);
    money = bonitoPrice * bonitoKg + hMackKg * hMackPrice + shellKg * shellPrice;
    console.log(money.toFixed(2));
  }
  fishMarket(6.9, 4.2, 1.5, 2.5, 1);
