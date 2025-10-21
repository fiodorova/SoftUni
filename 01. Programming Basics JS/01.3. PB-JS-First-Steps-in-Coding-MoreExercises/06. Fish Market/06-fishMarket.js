function fishMarket(input) {
    let skumriaPriceKg = Number(input[0]);
    let cacaPriceKg = Number(input[1]);
    let palamudKg = Number(input[2]);
    let safridKg = Number(input[3]);
    let midiKg = Number(input[4]);

    let palamudPriceKg = skumriaPriceKg * 1.6;
    let safridPriceKg = cacaPriceKg * 1.8;

    let palamudPrice = palamudKg * palamudPriceKg;
    let safridPrice = safridKg * safridPriceKg;
    let midiPrice = midiKg * 7.50;

    let totalPrice = palamudPrice + safridPrice + midiPrice;

    console.log(totalPrice.toFixed(2));
}

fishMarket(["5.55", 
    "3.57",
    "4.3",
    "3.6",
    "7"])