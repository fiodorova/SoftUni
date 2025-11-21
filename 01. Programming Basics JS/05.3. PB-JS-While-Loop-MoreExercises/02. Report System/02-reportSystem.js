function reportSystem(input) {
    let neededSum = Number(input[0]);
    let sum = 0;
    let cash = 0;
    let card = 0;
    let cashPay = 0;
    let cardPay = 0;

    let index = 1;
    let command = input[index];

    while(command !== "End" || sum >= neededSum){
        let productPrice = Number(input[index]);
        if(index % 2 === 0){
            if(productPrice < 10){
                console.log("Error in transaction!");
            } else {
                cardPay++
                card += productPrice;
                sum += productPrice;
                console.log("Product sold!");
            }
        } else {
            if(productPrice > 100){
                console.log("Error in transaction!");
            } else {
                cashPay++;
                cash += productPrice;
                sum += productPrice;
                console.log("Product sold!");
            }
        }

        if(sum >= neededSum){
            console.log(`Average CS: ${(cash / cashPay).toFixed(2)}`);
            console.log(`Average CC: ${(card / cardPay).toFixed(2)}`);
            break;
        }

        index++;
        command = input[index];
    }

    if(command === "End"){
        console.log("Failed to collect required money for charity.");
    }
}

reportSystem(["600",
"86",
"150",
"98",
"227",
"End"])