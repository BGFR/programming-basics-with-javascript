  //PB-04. Vegetable Market 
  function vegetables(vkg, fkg, tvkg, tfkg) {
    vkg = Number(vkg);
    fkg = Number(fkg);
    tvkg = Number(tvkg);
    tfkg = Number(tfkg);
    total = ((vkg * tvkg + fkg * tfkg) / "1.94").toFixed(2);
    console.log(total);
  }
  
  vegetables(0.194, 19.4, 10, 10);
