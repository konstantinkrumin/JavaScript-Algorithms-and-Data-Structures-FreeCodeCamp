function checkCashRegister(price, cash, cid) {
  let tempCid = [...cid.reverse()];
  let change = cash - price;
  let totalValueCID = 0;
  for (let i=0; i < cid.length; i++) {
    totalValueCID += cid[i][1];
  } 
  
  let status = "";
  
  if (change == totalValueCID) {
    let status = "CLOSED";
    return {"status" : status, "change" : cid.reverse()};
  }
  
  let changeToReturn = [["ONE HUNDRED", 0.00], ["TWENTY", 0.00], ["TEN", 0.00], ["FIVE", 0.00], ["ONE", 0.00], ["QUARTER", 0.00], ["DIME", 0.00], ["NICKEL", 0.00], ["PENNY", 0.00]];
  // Assign parameters' values to new variables that are updated in the following calculations w/o changing initial arguments
  let remainingChange = change;
  let remainingCid = [...tempCid];
  
  function calculateChange (value, cidSubArr) {
    while (remainingChange >= value && remainingCid[cidSubArr][1] >= value) {
      changeToReturn[cidSubArr][1] += value;
      remainingCid[cidSubArr][1] -= value;
      remainingChange -= value;
    }
  }
  
  let denominations = [100, 20, 10, 5, 1, 0.25, 0.10, 0.05, 0.01];
  
  for (let j=0; j < cid.length-1; j++) {
    calculateChange(denominations[j], j);
    if (remainingCid[j][1] < denominations[j] || remainingChange < denominations[j]) {
      calculateChange(denominations[j+1], j+1);
    }
  }
  // Exceptions (calculations for pennies following different pattern from the rest for rounding purposes)
  if (remainingCid[7][1] < 0.05 || remainingChange < 0.05) {
    while (remainingChange > 0.00 && remainingCid[8][1] >= 0.01) {
      changeToReturn[8][1] += 0.01;
      remainingCid[8][1] -= 0.01;
      remainingChange -= 0.01;
    }
  }
  if (remainingChange < 0.01 && remainingCid[8][1] > 0.00 && remainingCid[8][1] < 0.01) {
      changeToReturn[8][1] += 0.01;
      remainingCid[8][1] = 0.00;
      remainingChange = 0.00;
  }

  
  let finalChangeToReturn = [];
  for (let k=0; k < changeToReturn.length; k++) {
    if (changeToReturn[k][1] != 0.00) {
      let changeItem  = [];
      changeItem.push(changeToReturn[k][0]);
      changeItem.push(Math.round(changeToReturn[k][1] * 100) / 100);
      finalChangeToReturn.push(changeItem);
    }
  }
  
  if (remainingChange > 0) {
    status = "INSUFFICIENT_FUNDS";
    finalChangeToReturn = [];
    return {"status" : status, "change" : finalChangeToReturn};
  } else {
    status = "OPEN";
    return {"status" : status, "change" : finalChangeToReturn};
  }
}

//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);