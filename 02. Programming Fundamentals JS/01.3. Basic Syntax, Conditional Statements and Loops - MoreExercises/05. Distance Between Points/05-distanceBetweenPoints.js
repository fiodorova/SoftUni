function distanceBetweenPoints(x1, y1, x2, y2){

    let a = x2 - x1;
    let b = y2 - y1;

    let dist = Math.sqrt(a * a + b * b)

    console.log(dist);
}

distanceBetweenPoints(2, 4, 5, 0);
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985);