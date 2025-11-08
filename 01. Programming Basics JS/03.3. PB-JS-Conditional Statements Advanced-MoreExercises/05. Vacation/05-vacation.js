function vacation(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let place;
    let dest;
    let price =0;

    if (budget <= 1000) {
        place = "Camp";
        if (season === "Summer") {
            dest = "Alaska";
            price = budget * 0.65;
        } else if (season === "Winter") {
            dest = "Morocco";
            price = budget * 0.45;
        }
    } else if (budget > 1000 && budget <= 3000){
        place = "Hut";
        if (season === "Summer") {
            dest = "Alaska";
            price = budget * 0.8;
        } else if (season === "Winter") {
            dest = "Morocco";
            price = budget * 0.6;
        }
    } else {
        place = "Hotel";
        price = budget * 0.9;
        if (season === "Summer") {
            dest = "Alaska";
        } else if (season === "Winter") {
            dest = "Morocco";
        }
    }

    console.log(`${dest} - ${place} - ${price.toFixed(2)}`)
}

vacation(["2543.99", "Winter"])