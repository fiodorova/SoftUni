function truckDriver(input) {
    let season = input[0];
    let km = Number(input[1]);

    let tax =0;
    let salary = 0; 

    if (km <= 5000) {
        switch (season) {
            case "Spring": 
            case "Autumn": tax = 0.75; break;
            case "Summer": tax = 0.9; break;
            case "Winter": tax = 1.05; break;
        }
    } else if (km > 5000 && km <= 10000) {
        switch (season) {
            case "Spring": 
            case "Autumn": tax = 0.95; break;
            case "Summer": tax = 1.1; break;
            case "Winter": tax = 1.25; break;
        }
    } else if (km > 10000 && km <= 20000) {
        tax = 1.45;
    }

    salary = (tax * km * 4) * 0.9;

    console.log(salary.toFixed(2));
}

truckDriver(["Autumn", "8600"])