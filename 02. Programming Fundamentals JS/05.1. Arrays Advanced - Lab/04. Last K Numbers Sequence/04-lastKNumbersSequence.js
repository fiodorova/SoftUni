function lastKNumbersSequence(n, k){
    let result = [1];

    for (let i = 0; i < n - 1; i++) {
        lastK = result.slice(-k);

        let sum = 0;
        for (let element of lastK) {
            sum += element;            
        }

        result.push(sum);        
    }

    console.log(result.join(' '));
}

lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)
lastKNumbersSequence(9, 5)
