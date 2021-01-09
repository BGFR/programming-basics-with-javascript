  //06. Charity Campaign 
  function charityCampaign(days, confectioners, cakes, waffles, panCakes) {
    days = Number(days);
    confectioners = Number(confectioners);
    cakes = Number(cakes);
    waffles = Number(waffles);
    panCakes = Number(panCakes);
    cakePrice = Number("45");
    wafflePrice = Number("5.80");
    panCakePrice = Number("3.20");
    ammount =
      (cakes * cakePrice + waffles * wafflePrice + panCakes * panCakePrice) *
      days *
      confectioners;
    donation = (ammount * 7) / 8;
    console.log(donation);
  }
  charityCampaign("23", "8", "14", "30", "16");
