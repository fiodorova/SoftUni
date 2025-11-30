function profit(input) {

    let coins1lv = Number(input[0]);
    let coins2lv = Number(input[1]);
    let bank5lv = Number(input[2]);
    let sum = Number(input[3]);

    for(let i = 0; i <= coins1lv; i++){
        for(let j = 0; j <= coins2lv; j++){
            for(let k = 0; k <= bank5lv; k++){
                if(i * 1 + j * 2 + k * 5 === sum) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`)
                }
        
            }
        
        }
    }
}

profit(["5", "3", "1", "7"])