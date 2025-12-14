function specialNumbers(n){
    for(let num = 1; num <= n; num++){
    let result = 0;
    let numAsString = String(num);

    for(let i = 0; i < numAsString.length; i++){
        result += Number(numAsString[i]);
    }

    let special = false;

        if(result == 5 || result == 7 || result == 11){
            special = true;

        }
    
    console.log(`${num} -> ${special ? 'True' : 'False'}`)
}
}

specialNumbers(15)
specialNumbers(30)