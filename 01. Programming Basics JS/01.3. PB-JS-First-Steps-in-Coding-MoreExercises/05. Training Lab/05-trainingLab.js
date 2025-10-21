function trainingLab(input) {
    let w = Number(input[0]);
    let h = Number(input[1]);

    let high = h * 100 - 100;
    let deskOnRow = Math.floor(high / 70);

    let width = w * 100;
    let rows = Math.floor(width / 120);

    let seats = deskOnRow * rows - 3;

    console.log(seats);
}

trainingLab(["8.4", "5.2"])