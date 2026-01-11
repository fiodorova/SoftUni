function perfectNumber(number){

    let sumDiv = sumDividors(number);

    if(number == sumDiv){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function sumDividors(x){
        let sum = 0;

        for (let index = 1; index <= x / 2; index++) {
            if (x % index == 0){
                sum += index;
            }        
        }
        return sum;
    }
}

perfectNumber(6)
perfectNumber(28)
perfectNumber(1236498)
