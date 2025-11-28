function challengeTheWedding(input) {

    let men = Number(input[0]);
    let women = Number(input[1]);
    let freeTables = Number(input[2]);

    let tables = 0;
    let result = '';
    let isTablesBusy = false;

    for (let i = 1; i <= men; i++) {
        for (let j = 1; j <= women; j++) {
            if (tables >= freeTables) {
                isTablesBusy = true;
                break;
            }
            tables++;
            result += "(" + i + " <-> " + j + ") ";            
        }

        if (isTablesBusy) {
            break;
        }
    }

    console.log(result);
}

challengeTheWedding(["5", "8", "40"])