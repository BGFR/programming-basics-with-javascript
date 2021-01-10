  //PB-03. Celsius to Fahrenheit
  
  function cToF(c) {
    c = Number(c);
    f = (c * 9) / 5 + 32;
    console.log(f.toFixed(2));
  }
  
  cToF(100);
