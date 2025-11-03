function tradeCommissions(input) {
    let town = input[0];
    let sales = Number(input[1]);
    let comm = 0;

    if (sales >= 0 && sales <= 500) {
        switch (town) {
            case "Sofia": comm = sales * 0.05; break;
            case "Varna": comm = sales * 0.045; break;
            case "Plovdiv": comm = sales * 0.055; break;
        }
    } else if (sales > 500 && sales <= 1000) {
        switch (town) {
            case "Sofia": comm = sales * 0.07; break;
            case "Varna": comm = sales * 0.075; break;
            case "Plovdiv": comm = sales * 0.08; break;
        }
    } else if (sales > 1000 && sales <= 10000) {
        switch (town) {
            case "Sofia": comm = sales * 0.08; break;
            case "Varna": comm = sales * 0.1; break;
            case "Plovdiv": comm = sales * 0.12; break;
        }
    } else if (sales > 10000) {
        switch (town) {
            case "Sofia": comm = sales * 0.12; break;
            case "Varna": comm = sales * 0.13; break;
            case "Plovdiv": comm = sales * 0.145; break;
        }
    }

    if ((town === "Sofia" || town === "Varna" || town === "Plovdiv") && (sales >= 0)) {
        console.log(comm.toFixed(2));
    } else {
        console.log("error");
    }
}

tradeCommissions(["Kaspichan",
"-50"])



