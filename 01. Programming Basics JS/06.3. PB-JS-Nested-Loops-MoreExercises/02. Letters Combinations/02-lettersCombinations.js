function lettersCombinations(input) {
    let letterStart = input[0];
    let letterEnd = input[1];
    let letterMiss = input[2];

    let start = letterStart.charCodeAt();
    let end = letterEnd.charCodeAt();
    let miss = letterMiss.charCodeAt();

    let result = '';
    let counter = 0;

    for(let i = start; i <= end; i++){
        for(let j = start; j <= end; j++){
            for(let k = start; k <= end; k++){
                let char1 = String.fromCharCode(i);
                let char2 = String.fromCharCode(j);
                let char3 = String.fromCharCode(k);

                if(i !== miss && j !== miss && k !== miss){
                    result += char1 + char2 + char3 + " ";
                    counter++;
                }        
            }
        }
    }

    console.log(`${result}${counter}`);
}

lettersCombinations(["a", "c", "z"])

