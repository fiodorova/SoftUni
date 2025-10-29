function pets(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogFoodDay = Number(input[2]);
    let catFoodDay = Number(input[3]);
    let turtleFoodDay = Number(input[4]);

    let dogFood = dogFoodDay * days;
    let catFood = catFoodDay * days;
    let turtleFood = turtleFoodDay / 1000 * days;

    let sumFood = dogFood + catFood + turtleFood;

    if (sumFood <= food) {
        console.log(`${Math.floor(food - sumFood)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(sumFood - food)} more kilos of food are needed.`)
    }
}

pets(["5", "10", "2.1", "0.8", "321"])
