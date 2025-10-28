function harvest(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let empl = Number(input[3]);

    let harv = x * y;
    let wine = harv / 2.5 * 0.4;

    if (wine < z) {
        console.log(`It will be a tough winter! More ${Math.floor(z - wine)} liters wine needed.`)
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - z)} liters left -> ${Math.ceil((wine - z) / empl)} liters per person.`)
    }
}

harvest(["1020", "1.5", "425", "4"])