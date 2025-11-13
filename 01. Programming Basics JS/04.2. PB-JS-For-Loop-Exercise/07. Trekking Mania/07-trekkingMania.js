function trekkingMania(input) {
    let groups = Number(input[0]);
    let peopleTotal = 0;
    let climbV1 = 0;
    let climbV2 = 0;
    let climbV3 = 0;
    let climbV4 = 0;
    let climbV5 = 0;

 
    for (let i = 1; i < input.length; i++) {
        let peopleInGroup = Number(input[i]);
        peopleTotal += peopleInGroup;

        if(peopleInGroup <= 5) {
            climbV1 += peopleInGroup;
        } else if(peopleInGroup <= 12) {
            climbV2 += peopleInGroup;
        } else if(peopleInGroup <= 25) {
            climbV3 += peopleInGroup;
        } else if(peopleInGroup <= 40) {
            climbV4 += peopleInGroup;
        } else if(peopleInGroup >= 41) {
            climbV5 += peopleInGroup;
        } 
    }

    console.log(`${(climbV1 / peopleTotal * 100).toFixed(2)}%`);
    console.log(`${(climbV2 / peopleTotal * 100).toFixed(2)}%`);
    console.log(`${(climbV3 / peopleTotal * 100).toFixed(2)}%`);
    console.log(`${(climbV4 / peopleTotal * 100).toFixed(2)}%`);
    console.log(`${(climbV5 / peopleTotal * 100).toFixed(2)}%`);
}

trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])
