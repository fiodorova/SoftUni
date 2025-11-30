function happyCatParking(input) {

    let days = Number(input[0]);
    let hours = Number(input[1]);

    let totalSum = 0;

    for (let d = 1; d <= days; d++) {
        let totalSumDay = 0;

        for (let h = 1; h <= hours; h++) {

            if (d % 2 === 0 && h % 2 !== 0) {
                totalSumDay += 2.50;
            } else if (d % 2 !== 0 && h % 2 === 0) {
                totalSumDay += 1.25;
            } else {
                totalSumDay += 1;
            }
        }
        totalSum += totalSumDay;
        console.log(`Day: ${d} - ${totalSumDay.toFixed(2)} leva`)
    }

    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}

happyCatParking(["5", "2"])