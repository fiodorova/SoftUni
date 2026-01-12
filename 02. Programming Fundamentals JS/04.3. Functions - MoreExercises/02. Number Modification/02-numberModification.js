function numberModification(number){

    let averageSum = avg(number);

    while(averageSum <= 5){
        let numberAsString = number.toString();
        numberAsString += 9;
        number = Number(numberAsString);
        averageSum = avg(number)
    }
    console.log(number);

    function avg(num){
        let numAsString = num.toString();
        let sumDigits = 0;
        for (let index = 0; index < numAsString.length; index++) {
            let digit = Number(numAsString[index]);
            sumDigits += digit;            
        }
        let avgSum = sumDigits / numAsString.length
        return avgSum;
    }
}

numberModification(101)
numberModification(5835)
