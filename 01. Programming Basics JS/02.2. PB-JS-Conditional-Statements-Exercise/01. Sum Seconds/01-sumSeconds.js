function sumSeconds(input) {
    let timeFirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);

    let timeSum = timeFirst + timeSecond + timeThird;
    let min = Math.floor(timeSum / 60);
    let sec = timeSum % 60;

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    } else {
        console.log(`${min}:${sec}`);
    }
}

sumSeconds(["50", "50", "49"])