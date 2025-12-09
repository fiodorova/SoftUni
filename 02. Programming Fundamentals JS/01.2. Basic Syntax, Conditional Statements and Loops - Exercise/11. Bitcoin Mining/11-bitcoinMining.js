function bitcoinMining(input){
    let bitcoinInLev = 11949.16;
    let gramGold = 67.51;
    let totalLv = 0;
    let bitcoins = 0;
    let day = 0;
    let isFirst = false;
    let dayFirst = 0;
    let countBitc = 0;

    for (let i = 0; i < input.length; i++) {
        let shift = Number(input[i]);
        day++
        if(day % 3 === 0){
            shift *= 0.7;
        }
        let leva = shift * gramGold;
        totalLv += leva;

        if( totalLv >= bitcoinInLev){
            countBitc++;
            let boughtBitc = Math.floor(totalLv / bitcoinInLev);
            bitcoins += boughtBitc;
            if(countBitc == 1){
                dayFirst = day;
                isFirst = true;
            }
            totalLv -= bitcoinInLev * boughtBitc;
        }

    }    
        console.log(`Bought bitcoins: ${bitcoins}`);
        if(isFirst === true){

            console.log(`Day of the first purchased bitcoin: ${dayFirst}`);
        }
        console.log(`Left money: ${totalLv.toFixed(2)} lv.`);        
}

bitcoinMining([100, 200, 300]);
bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);