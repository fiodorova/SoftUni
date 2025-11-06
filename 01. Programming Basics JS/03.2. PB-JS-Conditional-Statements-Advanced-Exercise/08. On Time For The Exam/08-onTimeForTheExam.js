function onTimeForTheExam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArr = Number(input[2]);
    let minArr = Number(input[3]);

    let examTime = hourExam * 60 + minExam;
    let arrTime = hourArr * 60 + minArr;

    let diffMin = arrTime - examTime;

    if (diffMin > 0) {
        console.log('Late');
    } else if (diffMin <= 0 && diffMin >= -30) {
        console.log('On time');
    } else {
        console.log('Early');
    }

    let result;
    if (diffMin !== 0) {
        let diffHours = Math.trunc(Math.abs(diffMin / 60));
        let diffMinutes = Math.abs(diffMin % 60);
        if (diffHours > 0) {
            if (diffMinutes <= 9) {
                result = diffHours + ":" + 0 + diffMinutes + " hours";
            } else {
                result = diffHours + ":" + diffMinutes + " hours";
            }
        } else {
            result = diffMinutes + " minutes";
        }

        if (diffMin < 0){
            result = result + " before the start";
        } else {
            result = result + " after the start";
        }
        }

        console.log(result)
 
}

onTimeForTheExam(["16", "00", "15", "00"])
