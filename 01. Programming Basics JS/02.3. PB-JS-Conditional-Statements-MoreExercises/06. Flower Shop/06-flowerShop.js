function flowerShop(input) {
    let magn = Number(input[0]);
    let zumb = Number(input[1]);
    let rose = Number(input[2]);
    let kakt = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnPrice = magn * 3.25;
    let zumbPrice = zumb * 4;
    let rosePrice = rose * 3.5;
    let kaktPrice = kakt * 8;

    let flowersPrice = magnPrice + zumbPrice + rosePrice + kaktPrice;
    let profit = flowersPrice * 0.95;

    if (profit >= giftPrice) {
        console.log(`She is left with ${Math.floor(profit - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - profit)} leva.`)
    }
}

flowerShop(["15", "7", "5", "10", "100"])


 
 
