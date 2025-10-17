function depositCalculator(input) {
    let depositSum = Number(input[0]);
    let period = Number(input[1]);
    let percentage = Number(input[2])/100;
    let sum = depositSum + period * ((depositSum * percentage) / 12);
    console.log(sum);
}

depositCalculator(["200", "3", "5.7"])

// function depositCalc(input) {
//     let depSum = Number(input[0]);
//     let time = Number(input[1]);
//     let perc = Number(input[2])/100;
//     let suma = depSum + time * ((depSum * perc) / 12);

//     console.log(suma);
// }

// depositCalc(["2350", "6", "7"])