  //05. Birthday party 
  function birthdayParty(hallPrice) {
    hallPrice = Number(hallPrice);
    cakePrice = hallPrice * 0.2;
    drinksPrice = cakePrice * 0.55;
    entertainmentPrice = hallPrice / 3;
    console.log(hallPrice + cakePrice + drinksPrice + entertainmentPrice);
  }
  
  birthdayParty("3720");
