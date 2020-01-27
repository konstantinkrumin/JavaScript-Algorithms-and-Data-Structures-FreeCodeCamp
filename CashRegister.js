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
  let remainingChange = change;
  let remainingCid = [...tempCid];
  
  while (remainingChange >= 100 && remainingCid[0][1] >= 100) {
    changeToReturn[0][1] += 100;
    remainingCid[0][1] -= 100;
    remainingChange -= 100;
  }
  if (remainingCid[0][1] < 100 || remainingChange < 100) {
    while (remainingChange >= 20 && remainingCid[1][1] >= 20) {
      changeToReturn[1][1] += 20;
      remainingCid[1][1] -= 20;
      remainingChange -= 20;
    }
    if (remainingCid[1][1] < 20 || remainingChange < 20) {
      while (remainingChange >= 10 && remainingCid[2][1] >= 10) {
        changeToReturn[2][1] += 10;
        remainingCid[2][1] -= 10
        remainingChange -= 10;
      }
      if (remainingCid[2][1] < 10 || remainingChange < 10) {
        while (remainingChange >= 5 && remainingCid[3][1] >= 5) {
          changeToReturn[3][1] += 5;
          remainingCid[3][1] -= 5;
          remainingChange -= 5;
        }
        if (remainingCid[3][1] < 5 || remainingChange < 5) {
          while (remainingChange >= 1 && remainingCid[4][1] >= 1) {
            changeToReturn[4][1] += 1;
            remainingCid[4][1] -= 1;
            remainingChange -= 1;
          }
          if (remainingCid[4][1] < 1 || remainingChange < 1) {
            while (remainingChange >= 0.25 && remainingCid[5][1] >= 0.25) {
              changeToReturn[5][1] += 0.25;
              remainingCid[5][1] -= 0.25;
              remainingChange -= 0.25;
            }
            if (remainingCid[5][1] < 0.25 || remainingChange < 0.25) {
              while (remainingChange >= 0.10 && remainingCid[6][1] >= 0.10) {
                changeToReturn[6][1] += 0.10;
                remainingCid[6][1] -= 0.10;
                remainingChange -= 0.10;
              }
              if (remainingCid[6][1] < 0.10 || remainingChange < 0.10) {
                while (remainingChange >= 0.05 && remainingCid[7][1] >= 0.05) {
                  changeToReturn[7][1] += 0.05;
                  remainingCid[7][1] -= 0.05;
                  remainingChange -= 0.05;
                }
                if (remainingCid[7][1] < 0.05 || remainingChange < 0.05) {
                  while (remainingChange > 0.00 && remainingCid[8][1] >= 0.01) {
                    changeToReturn[8][1] += 0.01;
                    remainingCid[8][1] -= 0.01;
                    remainingChange -= 0.01;
                  }
                  if (remainingChange < 0.01 && remainingCid[8][1] > 0.00 && remainingCid[8][1] < 0.01) {
                    changeToReturn[8][1] += 0.01;
                    remainingCid[8][1] = 0.00;
                    remainingChange = 0.00;
                  }
                }
              }
            }
          }
        }
      }
    }
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