function bills(input) {
    let months = Number(input[0]);
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;

    for(let i = 1; i <= months; i++) {
        let bill = Number(input[i]);
        electricity += bill;
        water += 20;
        internet += 15;
        other += (Number(input[i]) + 20 + 15) * 1.2;
    }

    let avgBills = (electricity + water + internet + other) / months;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${avgBills.toFixed(2)} lv`);
}


bills(["5",
"68.63",
"89.25",
"132.53",
"93.53",
"63.22"])