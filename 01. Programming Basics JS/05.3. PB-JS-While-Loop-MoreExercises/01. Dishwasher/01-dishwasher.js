function dishwasher(input) {
    let detergentBottles = Number(input[0]);
    let detergent = detergentBottles * 750;

    let index = 1;
    let command = input[index];
    
    let spentDetergent = 0;
    let washedDishes = 0;
    let washedPots = 0;

    while(command !== "End"){
        let dishes = Number(command);
        if(index % 3 === 0){
            spentDetergent += dishes * 15;
            washedPots += dishes;
        } else {
            spentDetergent += dishes * 5;
            washedDishes += dishes;
        }

        if(spentDetergent > detergent){
            console.log(`Not enough detergent, ${spentDetergent - detergent} ml. more necessary!`)
            break;
        }

        index++;
        command = input[index];
    }

    if(detergent >= spentDetergent){
        console.log(`Detergent was enough!`);
        console.log(`${washedDishes} dishes and ${washedPots} pots were washed.`);
        console.log(`Leftover detergent ${detergent - spentDetergent} ml.`)
    } 
}

dishwasher(["1",
    "10",
    "15",
    "10",
    "12",
    "13",
    "30"    ])