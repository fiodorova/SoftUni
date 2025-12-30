function simpleCalculator(x, y, operator) {
    let result = 0;
    
    switch(operator){
        case 'multiply': result = x * y; break;
        case 'divide': result = x / y; break;
        case 'add': result = x + y; break;
        case 'subtract': result = x - y; break;
    }

    console.log(result);
}

simpleCalculator(5, 5, "multiply");
simpleCalculator(40, 8, "divide");
simpleCalculator(12, 19, "add");
simpleCalculator(50, 13, "subtract");
