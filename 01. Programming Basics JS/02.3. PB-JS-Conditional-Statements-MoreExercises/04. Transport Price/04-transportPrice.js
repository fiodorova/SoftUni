function transportPrice(input) {
    let n = Number(input[0]);
    let time = input[1];
    let price = 0;

    if (n < 20 && time === "day") {
        price = 0.7 + n * 0.79;
    } else if (n < 20 && time === "night") {
        price = 0.7 + n * 0.9;
    } else if (n >= 20 && n < 100) {
        price = n * 0.09; 
    } else {
        price = n * 0.06;
    }

    console.log(price.toFixed(2));
}

transportPrice(["180", "night"])
