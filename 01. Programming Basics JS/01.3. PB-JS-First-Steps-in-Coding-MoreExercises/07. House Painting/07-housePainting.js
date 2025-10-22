function housePainting(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let houseArea = Math.pow(x, 2)
        + (Math.pow(x, 2) - 1.2 * 2)
        + (x * y - Math.pow(1.5, 2)) * 2;

    let greenPaint = houseArea / 3.4;

    let roofArea = 2 * x * y + x * h;
    let redPaint = roofArea / 4.3;

    console.log(greenPaint.toFixed(2));
    console.log(redPaint.toFixed(2));
}

housePainting(["6",
    "10",
    "5.2"])