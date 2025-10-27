function shopping(input) {
    let budget = Number(input[0]);
    let GC = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let moneyForGC = GC * 250;
    let moneyForCPU = moneyForGC * 0.35 * CPU;
    let moneyForRAM = moneyForGC * 0.1 * RAM;

    let totalExpenses = 
        moneyForGC +
        moneyForCPU + 
        moneyForRAM;

    if (GC > CPU) {
        totalExpenses *= 0.85;
    }

    if (budget >= totalExpenses) {
        console.log(`You have ${(budget - totalExpenses).toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${(totalExpenses - budget).toFixed(2)} leva more!`)
    }
}

shopping(["920.45",
"3",
"1",
"1"])

