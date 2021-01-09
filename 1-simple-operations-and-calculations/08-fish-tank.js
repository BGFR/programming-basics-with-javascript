  //08. Fish Tank 
  function fishTank(lenght, width, height, percent) {
    lenght = Number(lenght);
    width = Number(width);
    height = Number(height);
    percent = Number(percent);
    vol = lenght * width * height * 0.001;
    liters = vol * (1 - percent / 100);
    console.log(liters);
  }
  
  fishTank("85", "75", "47", "17");
