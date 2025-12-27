function printNthElement(array){
    let n = Number(array[array.length - 1]);
    let result = [];

    for (let index = 0; index < array.length - 1; index++) {
        if(index % n == 0){
            result.push(array[index]);
        }        
    }
    console.log(result.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2'])
printNthElement(['dsa', 'asd', 'test', 'test', '2'])
printNthElement(['1', '2', '3', '4', '5', '6'])