function bombNumbers(array, bomb){
    let bombNumber = bomb[0];
    let bombRadius = bomb[1];
    
    let indexOfBomb = array.indexOf(bombNumber);
    while(indexOfBomb !== -1){
        let startExplIndex = Math.max(0, indexOfBomb - bombRadius)
        let explLength = bombRadius * 2 + 1;
        array.splice(startExplIndex, explLength);
        indexOfBomb = array.indexOf(bombNumber);
    }

    let sum = 0;
    for (let number of array) {
        sum += number;        
    }
    //let sum = array.reduce((a, b) => a + b, 0);
    
    console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
    )
bombNumbers([1, 4, 4, 2, 8, 9, 1],
    [9, 3]
    )
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    )
bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1],
    [2, 1]
    )