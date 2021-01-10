//PB-01. Trapeziod Area 
function trapezoid(b1, b2, h) {
    b1 = Number(b1);
    b2 = Number(b2);
    h = Number(h);
    area = ((b1 + b2) * h) / "2";
    console.log(area.toFixed(2));
  }
  
  trapezoid("8", "13", "7");
