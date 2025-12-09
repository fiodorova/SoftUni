function thePyramidOfKingDjoser(size, incresment){
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let steps = 1;

    while(size >= 1){

        if(size > 2){
            if(steps % 5 == 0) {
                lapisLazuli += size * 4 - 4 * incresment
            } else {
                marble += size * 4 - 4 * incresment
            }
            steps++;
        stone += Math.pow(size - 2, 2) * incresment

        } else {
            gold += Math.pow(size, 2) * incresment
        }

        size -= 2;

    }
        console.log(`Stone required: ${Math.ceil(stone)}`);
        console.log(`Marble required: ${Math.ceil(marble)}`);
        console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
        console.log(`Gold required: ${Math.ceil(gold)}`);
        console.log(`Final pyramid height: ${Math.floor(steps * incresment)}`);
}

thePyramidOfKingDjoser(11, 1);
 thePyramidOfKingDjoser(11, 0.75);
 thePyramidOfKingDjoser(12, 1);
 thePyramidOfKingDjoser(23, 0.5);