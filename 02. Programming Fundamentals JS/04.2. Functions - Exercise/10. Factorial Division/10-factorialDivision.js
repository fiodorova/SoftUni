function factorialDivision(firstNumber, secondNumber){
    function factorialCalc(number){
        let result = 1;
        while(number != 1){
            result *= number;
            number--;
        }
        return result
    }

    let finalDivResult = factorialCalc(firstNumber) / factorialCalc(secondNumber);

    console.log(finalDivResult.toFixed(2));
}

factorialDivision(5, 2)
factorialDivision(6, 2)