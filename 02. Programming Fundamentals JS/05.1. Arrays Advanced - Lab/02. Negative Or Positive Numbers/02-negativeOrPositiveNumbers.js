function negativeOrPositiveNumbers(input){
    let result = [];
    for (let element of input) {
        if(element < 0){
            element = Number(element);
            result.unshift(element);
        } else {
            result.push(element)
        }        
    }

    for (let element of result) {
        console.log(element);        
    }

    //console.log(result.join(`\n`));
}

negativeOrPositiveNumbers(['7', '-2', '8', '9'])
negativeOrPositiveNumbers(['3', '-2', '0', '-1'])
