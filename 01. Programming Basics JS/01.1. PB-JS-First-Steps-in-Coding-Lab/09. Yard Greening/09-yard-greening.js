function yardGreen(input) {
    let m = Number(input[0]);
    let price = m * 7.61;
    let disc = price * 0.18;
    let finPrice = price - disc;

    console.log(`The final price is: ${finPrice} lv.`);
    console.log(`The discount is: ${disc} lv.`);
}

yardGreen(["550"]);