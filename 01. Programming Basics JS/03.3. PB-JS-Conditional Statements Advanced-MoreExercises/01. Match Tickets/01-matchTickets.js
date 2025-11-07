function matchTickets(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let people = Number(input[2]);

    let transport = 0;
    let ticketPrice = 0;

    if (category === "VIP") {
        ticketPrice = people * 499.99;
    } else if (category === "Normal") {
        ticketPrice = people * 249.99;
    }

    if (people >= 1 && people <= 4) {
        transport = budget * 0.75;
    } else if (people >= 5 && people <= 9) {
        transport = budget * 0.60;
    } else if (people >= 10 && people <= 24) {
        transport = budget * 0.50;
    } else if (people >= 25 && people <= 49) {
        transport = budget * 0.40;        
    } else if (people >= 50) {
        transport = budget * 0.25;
    }

    let totalPrice = ticketPrice + transport;

    if (budget >= totalPrice) {
        console.log(`Yes! You have ${(budget - totalPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva.`)
    }
}

matchTickets(["30000", "VIP", "49"])

