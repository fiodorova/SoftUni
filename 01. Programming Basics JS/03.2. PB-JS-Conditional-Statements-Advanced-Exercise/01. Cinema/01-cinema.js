function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let seats = rows * columns;
    let income = 0;

    switch(type) {
        case "Premiere": income = seats * 12; break;
        case "Normal": income = seats * 7.5; break;
        case "Discount": income = seats * 5; break;
    }

    console.log(`${income.toFixed(2)} leva`);
}

cinema(["Discount",
"12",
"30"])

