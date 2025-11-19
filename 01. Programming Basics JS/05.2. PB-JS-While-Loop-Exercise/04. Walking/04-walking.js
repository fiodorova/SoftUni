function walking(input) {
    let target = 10000;
    let sum = 0;
    let index = 0;
    let command = input[index];

    while(command !== "Going home"){
        let steps = Number(command);
        sum += steps;

        if(sum >= target){
            console.log("Goal reached! Good job!");
            let diff = sum - target;
            console.log(`${diff} steps over the goal!`);
            break;
        }
        index++;
        command = input[index];

    }

    if(command === "Going home"){
        let stepsToHome = Number(input[index + 1]);
        sum += stepsToHome;

        if(sum >= target){
            console.log("Goal reached! Good job!");
            let diff = sum - target;
            console.log(`${diff} steps over the goal!`);
        } else {
            let diff = target - sum;
            console.log(`${diff} more steps to reach goal.`)
        }
    }
}

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"])


