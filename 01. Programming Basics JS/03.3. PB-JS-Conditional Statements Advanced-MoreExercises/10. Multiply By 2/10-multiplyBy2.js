function multiplyBy2(input) {
    let index = 0;
    let n = Number(input[index]);
    index++;

    while(n >= 0){
        if(n >= 0){
            n *= 2;
            console.log(`Result: ${n.toFixed(2)}`);
        }

        n = Number(input[index]);
        index++;
    }

    console.log("Negative number!" );
}

multiplyBy2(["23.43",
    "12.3245",
    "0",
    "65.23432",
    "23",
    "65",
    "-12"
    ])