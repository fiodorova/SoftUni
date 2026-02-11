function sumFirstLast(numAsString){
    let first = numAsString.shift();
    let last = numAsString.pop();

    const result = Number(first) + Number(last);
    console.log(result);
}

sumFirstLast(['20', '30', '40']);
sumFirstLast(['5', '10']);