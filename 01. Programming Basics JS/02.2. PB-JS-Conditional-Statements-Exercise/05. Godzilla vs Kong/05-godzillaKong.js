function godzillaKong(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPrice = Number(input[2]);

    let decor = budget * 0.10;
    let moneyForExtrasClothing = extras * clothingPrice;

    if (extras > 150) {
        moneyForExtrasClothing *= 0.9;
    }
    
    let totalExpenses = decor + moneyForExtrasClothing;

    if (budget >= totalExpenses ) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalExpenses).toFixed(2)} leva left.`);

    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(totalExpenses - budget).toFixed(2)} leva more.`)
    }

}

godzillaKong(["9587.88",
"222",
"55.68"])

