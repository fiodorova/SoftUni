function gameOfIntervals(input) {
    let moves = Number(input[0]);
    let points = 0;
    let percent1 = 0;
    let percent2 = 0;
    let percent3 = 0;
    let percent4 = 0;
    let percent5 = 0;
    let percent6 = 0;


    for(let i = 1; i <= moves; i++) {
        let move = Number(input[i]);

        if(move >= 0 && move <= 9){
            points += move * 0.2;
            percent1++;
        } else if(move >= 10 && move <= 19){
            points += move * 0.3;
            percent2++;
        } else if(move >= 20 && move <= 29){
            points += move * 0.4;
            percent3++;
        } else if(move >= 30 && move <= 39){
            points += 50;
            percent4++;
        } else if(move >= 40 && move <= 50){
            points += 100;
            percent5++;
        } else {
            points /= 2;
            percent6++;
        }
    }

    console.log(`${points.toFixed(2)}`);
    console.log(`From 0 to 9: ${(percent1 / moves * 100).toFixed(2)}%`)
    console.log(`From 10 to 19: ${(percent2 / moves * 100).toFixed(2)}%`)
    console.log(`From 20 to 29: ${(percent3 / moves * 100).toFixed(2)}%`)
    console.log(`From 30 to 39: ${(percent4 / moves * 100).toFixed(2)}%`)
    console.log(`From 40 to 50: ${(percent5 / moves * 100).toFixed(2)}%`)
    console.log(`Invalid numbers: ${(percent6 / moves * 100).toFixed(2)}%`)
}

gameOfIntervals(["10",
"43",
"57",
"-12",
"23",
"12",
"0",
"50",
"40",
"30",
"20"])