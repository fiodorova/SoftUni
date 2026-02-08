function fruit(fruitName, weightGrams, priceKg){
    let kilogram = weightGrams / 1000;
    let price = kilogram * priceKg;

    console.log(`I need $${price.toFixed(2)} to buy ${kilogram.toFixed(2)} kilograms ${fruitName}.`);
}

fruit('orange', 2500, 1.80)
fruit('apple', 1563, 2.35)