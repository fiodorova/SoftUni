function weddingSeats(input){

    let lastSector = input[0];
    let rowsFirstSector = Number(input[1]);
    let seatsOddRow = Number(input[2]);

    let firstSector = "A";
    let firstSectorNum = firstSector.charCodeAt();
    let lastSectorNum = lastSector.charCodeAt();
    let rows = 0;
    let seats = 0;
    let seatsCounter = 0;

    for(let i = firstSectorNum; i <= lastSectorNum; i++){
        if(i === firstSectorNum){
            rows = rowsFirstSector;
        } else {
            rows++;
        }
        for(let j = 1; j <= rows; j++){
            if(j % 2 !== 0){
                seats = seatsOddRow;
            } else {
                seats = seatsOddRow + 2;
            }

            for(let k = 97; k < 97 + seats; k++){
                seatsCounter++;
                console.log(`${String.fromCharCode(i)}${j}${String.fromCharCode(k)}`);
            }
        }
    }

    console.log(seatsCounter)
}

weddingSeats(["C", "4", "2"])

