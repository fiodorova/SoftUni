function averageNumber(input) {
    let n = Number(input[0]);
    let sum = 0;

    for(let i = 1; i <= n; i++){
        let num = Number(input[i]);
        sum += num;
    }

    console.log((sum / n).toFixed(2));
}

averageNumber(["4",
"95",
"23",
"76",
"23"])