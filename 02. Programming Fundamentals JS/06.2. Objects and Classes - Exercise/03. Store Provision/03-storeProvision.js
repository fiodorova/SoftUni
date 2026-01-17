function storeProvision(arrStock, arrOrdered){

    let stockProducts = {};

    for (let index = 0; index < arrStock.length; index += 2) {
        let currProd = arrStock[index];
        stockProducts[currProd] = Number(arrStock[index + 1])        
    }

    for (let index = 0; index < arrOrdered.length; index += 2) {
        let currProd = arrOrdered[index];
        if(!stockProducts.hasOwnProperty(currProd)) {
            stockProducts[currProd] = 0;
        }    
        stockProducts[currProd] += Number(arrOrdered[index + 1]);
    }

    for (let key of Object.keys(stockProducts)) {
        
        console.log(`${key} -> ${stockProducts[key]}`);
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )
storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
    'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
    )