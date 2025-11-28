function carNumber(input) {
    let numStart = Number(input[0]);
    let numEnd = Number(input[1]);

    let result = "";

    for (let i = numStart; i <= numEnd; i++) {
        for (let j = numStart; j <= numEnd; j++) {
            for (let k = numStart; k <= numEnd; k++) {
                for (let l = numStart; l <= numEnd; l++) {
                    if (((((i % 2 === 0) && (l % 2 !== 0)) || ((i % 2 !== 0) && (l % 2 === 0))) && (i > l) && ((j + k) % 2 === 0))) {
                        result += "" + i + j + k + l + " ";
                    }
                }
            }
        }
    }

    console.log(result);
}

carNumber(["3", "5"])
