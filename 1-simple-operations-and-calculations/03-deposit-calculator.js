  //03. Deposit Calculator 
  function depositCalculator(input1, input2, input3) {
    let depAmmount = Number(input1);
    let depTerm = Number(input2);
    let interest = Number(input3);
    console.log(depAmmount + depTerm * ((depAmmount * (interest / 100)) / 12));
  }
  depositCalculator("2350", "6", "7");
  
