function lunchBreak(input) {
    let nameSer = input[0];
    let timeSer = Number(input[1]);
    let timeBreak = Number(input[2]);

    let timeLunch = timeBreak / 8;
    let timeRelax = timeBreak / 4;

    let timeLeft = timeBreak - (timeLunch + timeRelax);

    if (timeLeft >= timeSer) {
        console.log(`You have enough time to watch ${nameSer} and left with ${Math.ceil(timeLeft - timeSer)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${nameSer}, you need ${Math.ceil(timeSer - timeLeft)} more minutes.`)
    } 
}

lunchBreak(["Teen Wolf",
"48",
"60"])
