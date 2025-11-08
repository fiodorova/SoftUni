function carToGo(input) {
    let budget = Number(input[0]);
    let season = input[1];
    
    let clas;
    let carType;
    let carPrice = 0;

    if (budget <= 100) {
        clas = "Economy class"
        if (season === "Summer") {
            carType = "Cabrio";
            carPrice = budget * 0.35;
        } else if (season === "Winter") {
            carType = "Jeep";
            carPrice = budget * 0.65;
        }
    } else if (budget >= 100 && budget <= 500) {
        clas = "Compact class";
        if (season === "Summer") {
            carType = "Cabrio";
            carPrice = budget * 0.45;
        } else if (season === "Winter") {
            carType = "Jeep";
            carPrice = budget * 0.8;
        }
    } else {
        clas = "Luxury class";
        carType = "Jeep";
        carPrice = budget * 0.9;
    }

    console.log(`${clas}`);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}

carToGo(["1010", "Winter"])