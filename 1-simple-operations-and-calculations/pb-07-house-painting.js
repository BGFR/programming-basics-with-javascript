  //PB-07. House Painting
  
  function housePaint(x, y, h) {
    x = Number(x);
    y = Number(y);
    h = Number(h);
    greenPaint = Number(3.4);
    redPaint = Number(4.3);
    walls = (2 * x * x - 1.2 * 2 + (2 * x * y - 2 * 1.5 * 1.5)) / greenPaint;
    roof = (2 * x * y + 2 * ((x * h) / 2)) / redPaint;
    console.log(walls.toFixed(2));
    console.log(roof.toFixed(2));
  }
  
  housePaint(6, 10, 5.2);
