function logistics(input) {
    let cargoCount = Number(input[0]);
    let cargoAll = 0;
    let bus = 0;
    let truck = 0;
    let train = 0;
    let price = 0;

    for(let i = 1; i <= cargoCount; i++) {
        let cargo = Number(input[i]);
        cargoAll += cargo;

        if(cargo <= 3) {
            bus += Number(input[i]);
            price += cargo * 200;            
        } else if(cargo <= 11) {
            truck += Number(input[i]); 
            price += cargo * 175;            

        } else if(cargo >= 12) {
            train += Number(input[i]);
            price += cargo * 120;            
        }
    }

    console.log((price/cargoAll).toFixed(2));
    console.log(`${(bus / cargoAll * 100).toFixed(2)}%`);
    console.log(`${(truck / cargoAll * 100).toFixed(2)}%`);
    console.log(`${(train / cargoAll * 100).toFixed(2)}%`);
}

logistics(["5", "2", "10", "20", "1", "7"])