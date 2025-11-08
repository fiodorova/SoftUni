function schoolCamp(input) {
    let season = input[0];
    let groupType = input[1];
    let studentCount = Number(input[2]);
    let nightsCount = Number(input[3]);

    let nightsPrice = 0;
    let sport;

    switch (season) {
        case "Winter": 
            switch (groupType) {
                case "boys": 
                    nightsPrice = studentCount * nightsCount * 9.6;
                    sport = "Judo";
                    break;
                case "girls":
                    nightsPrice = studentCount * nightsCount * 9.6;
                    sport = "Gymnastics";
                    break;
                case "mixed":
                    nightsPrice = studentCount * nightsCount * 10;
                    sport = "Ski";
                    break;
            }
            break;
        case "Spring":
            switch (groupType) {
                case "boys": 
                    nightsPrice = studentCount * nightsCount * 7.2;
                    sport = "Tennis";
                    break;
                case "girls":
                    nightsPrice = studentCount * nightsCount * 7.2;
                    sport = "Athletics";
                    break;
                case "mixed":
                    nightsPrice = studentCount * nightsCount * 9.5;
                    sport = "Cycling";
                    break;
            }
            break;
        case "Summer":
            switch (groupType) {
                case "boys": 
                    nightsPrice = studentCount * nightsCount * 15;
                    sport = "Football";
                    break;
                case "girls":
                    nightsPrice = studentCount * nightsCount * 15;
                    sport = "Volleyball";
                    break;
                case "mixed":
                    nightsPrice = studentCount * nightsCount * 20;
                    sport = "Swimming";
                    break;
            }
            break;
    }

    if (studentCount >= 10 && studentCount < 20) {
        nightsPrice = nightsPrice * 0.95;
    } else if (studentCount >= 20 && studentCount < 50) {
        nightsPrice = nightsPrice * 0.85;        
    } else if (studentCount >= 50) {
        nightsPrice = nightsPrice * 0.5;
    }

    console.log(`${sport} ${nightsPrice.toFixed(2)} lv.`)
}

schoolCamp(["Summer", "boys", "60", "7"])
