function primePairs(input){
    let startFirstPair = Number(input[0]);
    let startSecondPair = Number(input[1]);
    let diffFirst = Number(input[2]);
    let diffSecond = Number(input[3]);
    let endFirstPair = startFirstPair + diffFirst;
    let endSecondPair = startSecondPair + diffSecond;
    
    for(let f = startFirstPair; f <= endFirstPair; f++){
        let isPrime = true;
        for(let i = 2; i <= Math.sqrt(f); i++){
            if(f % i === 0){
                isPrime = false;
            }
        }

        for(let s = startSecondPair; s <= endSecondPair; s++){
            let isPrime2 = true;

            for(let j = 2; j <= Math.sqrt(s); j++){
                if(s % j === 0){
                    isPrime2 = false;
                }
            }

            if(isPrime && isPrime2){
                console.log(`${f}${s}`)
            }
        }            
    }
}

primePairs(["10", "30", "9", "6"])


