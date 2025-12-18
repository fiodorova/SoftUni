function primeNumberChecker(number) {
    let isPrime = true;
    for (let index = 2; index < number; index++) {
        if(number % index === 0){
            isPrime = false;            
        }        
    }

    if(isPrime){
        console.log("true");
    } else {
        console.log("false");
    }
}

primeNumberChecker(7)
primeNumberChecker(8)
primeNumberChecker(81)