function fuelTank(input) {
    let fuel = input[0];
    let liters = Number(input[1]);

    if (fuel === "Diesel" || fuel === "Gasoline" || fuel === "Gas") {
        if (liters >= 25) {
            console.log(`You have enough ${fuel}.`);
        } else if (liters < 25) {
            console.log(`Fill your tank with ${fuel}!`);
        } 

    } else {
        console.log(`Invalid fuel!`)
    }    
}

fuelTank(["Kerosene", "200"])