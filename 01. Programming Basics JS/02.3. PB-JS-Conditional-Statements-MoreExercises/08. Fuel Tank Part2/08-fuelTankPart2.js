function fuelTankPart2(input) {
    let fuelType = input[0];
    let fuelLiter = Number(input[1]);
    let card = input[2];

    let fuelPrice = 0;

    if (card === "Yes") {
        if (fuelType === "Gasoline") {
            fuelPrice = fuelLiter * 2.04;
        } else if (fuelType === "Diesel") {
            fuelPrice = fuelLiter * 2.21;
        } else {
            fuelPrice = fuelLiter * 0.85;
        } 
    } else {
        if (fuelType === "Gasoline") {
            fuelPrice = fuelLiter * 2.22;
        } else if (fuelType === "Diesel") {
            fuelPrice = fuelLiter * 2.33;
        } else {
            fuelPrice = fuelLiter * 0.93;
        } 
    }

    if (fuelLiter >= 20 && fuelLiter <= 25) {
        fuelPrice *= 0.92;
    } else if (fuelLiter> 25) {
        fuelPrice *= 0.9;
    }

    console.log(`${fuelPrice.toFixed(2)} lv.`);
}

fuelTankPart2(["Diesel", "19", "No"])