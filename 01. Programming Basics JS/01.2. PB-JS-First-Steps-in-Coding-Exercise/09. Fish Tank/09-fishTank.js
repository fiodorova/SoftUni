function fishTank(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percent = Number(input[3])/100;

    let vol = length * width * high;
    let volLiter = vol / 1000;

    let liters = volLiter - volLiter * percent;

    console.log(liters);
}

fishTank(["85","75","47","17"])
fishTank(["105","77","89","18.5"])