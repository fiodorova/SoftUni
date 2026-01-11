function addAndSubtract(num1, num2, num3) {
    function add(firstNum, secondNum){
        return firstNum + secondNum;
    }

    let substract = (addedResult, thirdNumber) => addedResult - thirdNumber
    let result = add(num1, num2);
    let finalResult = substract(result, num3);

    console.log(finalResult);
}

addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);
