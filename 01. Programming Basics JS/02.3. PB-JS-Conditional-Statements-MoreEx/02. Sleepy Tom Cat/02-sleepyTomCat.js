function sleepyTomCat(input) {
    let holidays = Number(input[0]);

    let workDays = 365 - holidays;
    let playTime = workDays * 63 + holidays * 127;

    if (playTime <= 30000) {
        console.log('Tom sleeps well');
        console.log(`${Math.floor((30000 - playTime) / 60)} hours and ${Math.floor((30000 - playTime) % 60)} minutes less for play`)
    } else {
        console.log('Tom will run away');
        console.log(`${Math.floor((playTime - 30000) / 60)} hours and ${Math.floor((playTime - 30000) % 60)} minutes more for play`)
    }
}

sleepyTomCat(["113"])