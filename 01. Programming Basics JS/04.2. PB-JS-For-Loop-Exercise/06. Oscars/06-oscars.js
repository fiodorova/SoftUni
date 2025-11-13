function oscars(input) {
    let actor = input[0];
    let pointsAcademy = Number(input[1]);
    let evalCount = Number(input[2]);

    for(i = 3; i < input.length; i+=2) {
        let actorLetters = input[i].length;
        let points = Number(input[i+1]);
        pointsAcademy += (points * actorLetters) / 2; 

        if (pointsAcademy > 1250.5) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${pointsAcademy.toFixed(1)}!`)
            break;
        }
    }

    if (pointsAcademy <= 1250.5) {
        console.log(`Sorry, ${actor} you need ${(1250.5 - pointsAcademy).toFixed(1)} more!`)
    }
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])
