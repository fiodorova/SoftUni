function equalPairs(input) {
    let n = Number(input[0]);

    let num1 = Number(input[1]);
    let num2 = Number(input[2]);

    let sum = num1 + num2;

    let isEqual = true;
    let maxDiff = Number.MIN_SAFE_INTEGER;

    for(let i = 3; i <= 2 * n; i += 2){
        let num1Current = Number(input[i]);
        let num2Current = Number(input[i + 1]);

        let sumPrev = Number(input[i - 2]) + Number(input[i - 1])
        let sumCurrent = num1Current + num2Current;

        if(sumCurrent !== sumPrev){
            isEqual = false;
            let diff = Math.abs(sumCurrent - sumPrev);
            if(diff > maxDiff){
                maxDiff = diff;
            }

        sum = sumCurrent

        }

    }

    if(isEqual){
        console.log(`Yes, value=${sum}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs(["1",
    "5",
    "5"
    ])