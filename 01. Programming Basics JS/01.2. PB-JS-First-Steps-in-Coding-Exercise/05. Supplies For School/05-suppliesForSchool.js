function suppliesForSchool(input) {
    let penPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let prepLiters = Number(input[2]);
    let discount = Number(input[3]) / 100;

    let penPrice = penPacks * 5.80;
    let markerPrice = markerPacks * 7.20;
    let prepPrice = prepLiters * 1.20;

    let suppliesPrice = penPrice + markerPrice + prepPrice;
    let finalPrice = suppliesPrice - (suppliesPrice * discount);
    console.log(finalPrice);
}

suppliesForSchool(["2", "3", "4", "25"])