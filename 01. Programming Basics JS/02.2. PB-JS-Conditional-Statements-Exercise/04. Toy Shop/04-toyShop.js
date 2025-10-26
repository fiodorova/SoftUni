function toyShop(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let bearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let moneyFromPuzzles = puzzlesCount * 2.60;
    let moneyFromDolls = dollsCount * 3;
    let moneyFromBears = bearsCount * 4.10;
    let moneyFromMinions = minionsCount * 8.20;
    let moneyFromTrucks = truckCount * 2;
    let moneyFromAllToys = 
        moneyFromPuzzles + 
        moneyFromDolls + 
        moneyFromBears + 
        moneyFromMinions + 
        moneyFromTrucks;
    let allToysCount = puzzlesCount + dollsCount + bearsCount + minionsCount + truckCount;

    if (allToysCount >= 50) {
        moneyFromAllToys *= 0.75;
    }

    let totalMoneyAfterRent = moneyFromAllToys * 0.90;

    if (totalMoneyAfterRent >= tripPrice) {
        console.log(`Yes! ${(totalMoneyAfterRent - tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice-totalMoneyAfterRent).toFixed(2)} lv needed.`)
    }
}

toyShop(["320", "8", "2", "5", "5", "1"])