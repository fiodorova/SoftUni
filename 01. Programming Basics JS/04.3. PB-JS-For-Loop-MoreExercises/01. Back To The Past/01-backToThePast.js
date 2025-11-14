function backToThePast(input) {
    let money = Number(input[0]);
    let year = Number(input[1]);
    let spentMoney = 0;

    for(let i = 1800; i <= year; i++){
        if(i % 2 === 0) {
            spentMoney += 12000;
        } else {
            spentMoney += 12000 + 50 * (i - 1782);
        }
    }

    if(money >= spentMoney) {
        console.log(`Yes! He will live a carefree life and will have ${(money - spentMoney).toFixed(2)} dollars left.`)
    } else {
        console.log(`He will need ${(spentMoney - money).toFixed(2)} dollars to survive.`)
    }
}

backToThePast(["100000.15", "1808"])