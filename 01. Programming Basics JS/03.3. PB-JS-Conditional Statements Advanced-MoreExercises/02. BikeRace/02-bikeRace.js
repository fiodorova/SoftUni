function bikeRace(input) {
    let juniorsCount = Number(input[0]);
    let seniorsCount = Number(input[1]);
    let routeType = input[2];
    let tax = 0;

    switch (routeType) {
        case "trail": tax = juniorsCount * 5.5 + seniorsCount * 7; break; 
        case "cross-country": 
            tax = juniorsCount * 8 + seniorsCount * 9.5; 
            if (juniorsCount + seniorsCount >= 50) {
                tax = tax * 0.75;
            }
            break; 
        case "downhill": tax = juniorsCount * 12.25 + seniorsCount * 13.75; break;
        case "road": tax = juniorsCount * 20 + seniorsCount * 21.5; break;
    }

    let donate = tax * 0.95;

    console.log(`${donate.toFixed(2)}`);
}

bikeRace(["3", "40", "road"])