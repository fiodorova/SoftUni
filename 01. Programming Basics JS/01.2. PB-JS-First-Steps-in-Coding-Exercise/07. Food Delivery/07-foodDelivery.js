function foodDelivery(input) {
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegeMenu = Number(input[2]);

    let chikenPrice = chickenMenu * 10.35;
    let fishPrice = fishMenu * 12.40;
    let vegePrice = vegeMenu * 8.15;
    let menuPrice = chikenPrice + fishPrice + vegePrice;
    let desertPrice = menuPrice * 0.2;
    let finalPrice = menuPrice + desertPrice + 2.50;

    console.log(finalPrice);
}

foodDelivery(["2","4","3"]
)