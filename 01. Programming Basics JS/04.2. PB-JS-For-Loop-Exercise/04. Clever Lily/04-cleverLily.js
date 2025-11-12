function cleverLily(input) {
    let age = Number(input[0])
    let washMachPrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);
    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let addedMoney = 10;

    for(let i = 1; i <= age; i++){
        if(i % 2 === 0) {
            savedMoney = savedMoney + addedMoney;
            addedMoney = addedMoney + 10;
            //savedMoney = savedMoney + i /2 * 10;
            stolenMoney++;
        } else {
            toysCounter++;
        }
    }

    let totalMoneyFromToys = singleToyPrice * toysCounter;
    let totalSavedMoney = (savedMoney + totalMoneyFromToys) - stolenMoney;

    if (totalSavedMoney >= washMachPrice) {
        console.log(`Yes! ${(totalSavedMoney - washMachPrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washMachPrice - totalSavedMoney).toFixed(2)}`)
    }
}

cleverLily(["21",
"1570.98",
"3"])


