  //PB-05. Training Lab 
  function lab(length, width) {
    length = Number(length);
    width = Number(width);
    deskslength = Number(Math.floor(length / "1.2"));
    deskswidth = Number(Math.floor((width - "1") / "0.7"));
    totaldesks = deskslength * deskswidth - "3";
    console.log(totaldesks);
  }
  
  lab("15", "8.9");
