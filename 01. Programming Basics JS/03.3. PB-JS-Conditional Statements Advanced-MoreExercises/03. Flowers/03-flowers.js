function flowers(input) {
    let chrysantCount = Number(input[0]);
    let roseCount = Number(input[1]);
    let tulipCount = Number(input[2]);
    let season = input[3];
    let holiday = input[4];

    let chrysantPrice = 0;
    let rosePrice = 0;
    let tulipPrice = 0;

    switch (season) {
        case "Spring":
        case "Summer": 
            chrysantPrice = chrysantCount * 2;
            rosePrice = roseCount * 4.1;
            tulipPrice = tulipCount * 2.5;
            break;
        case "Autumn":
        case "Winter":
            chrysantPrice = chrysantCount * 3.75;
            rosePrice = roseCount * 4.5;
            tulipPrice = tulipCount * 4.15;
            break;
    }

    let bouquetPrice = chrysantPrice + rosePrice + tulipPrice;
    let flowersCount = chrysantCount + roseCount + tulipCount;

    if (holiday === "Y") {
        bouquetPrice = bouquetPrice * 1.15;
    }

    if (tulipCount > 7 && season === "Spring") {
        bouquetPrice = bouquetPrice * 0.95;
    }

    if (roseCount >= 10 && season === "Winter") {
        bouquetPrice = bouquetPrice * 0.90;
    }

    if (flowersCount > 20) {
        bouquetPrice = bouquetPrice * 0.8;
    }

    let totalPrice = bouquetPrice + 2;

    console.log(totalPrice.toFixed(2))
}

flowers(["10", "10", "10", "Autumn", "N"])