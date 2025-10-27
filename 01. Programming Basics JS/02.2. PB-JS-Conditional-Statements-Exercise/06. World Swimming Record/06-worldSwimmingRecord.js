function worldSwimRecord(input) {
    let worldRecordSec = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let secForMeter = Number(input[2]);

    let totalSeconds = distanceMeters * secForMeter;

    let delay = Math.floor(distanceMeters / 15) * 12.5;
    let finalSec = totalSeconds + delay;
    
    if (finalSec < worldRecordSec) {
        console.log(`Yes, he succeeded! The new world record is ${finalSec.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(finalSec - worldRecordSec).toFixed(2)} seconds slower.`)
    }
}

worldSwimRecord(["55555.67",
"3017",
"5.03"])


