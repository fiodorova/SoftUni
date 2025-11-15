function footballLeague(input) {
    let capacity = Number(input[0])
    let fans = Number(input[1]);
    let pA = 0;4
    let pB = 0;
    let pV = 0;
    let pG = 0;

    for(let i = 2; i < input.length; i++){
        let sector = input[i];

        switch(sector) {
            case 'A': pA++; break;
            case 'B': pB++; break;
            case 'V': pV++; break;
            case 'G': pG++; break;
        }
    }

    console.log(`${(pA / fans * 100).toFixed(2)}%`);
    console.log(`${(pB / fans * 100).toFixed(2)}%`);
    console.log(`${(pV / fans * 100).toFixed(2)}%`);
    console.log(`${(pG / fans * 100).toFixed(2)}%`);
    console.log(`${(fans / capacity * 100).toFixed(2)}%`);
}

footballLeague(["76",
"10",
"A",
"V",
"V",
"V",
"G",
"B",
"A",
"V",
"B",
"B"])