function vegetableMarket(input) {
    let vegePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegeKg = Number(input[2]);
    let fruitKg = Number(input[3]);

    let vegeTotal = vegePrice * vegeKg;
    let fruitTotal = fruitPrice * fruitKg;

    let sumLv = vegeTotal + fruitTotal;
    let sumEuro = sumLv / 1.94;

    console.log(sumEuro.toFixed(2));
}

vegetableMarket(["1.5", "2.5", "10", "10"])