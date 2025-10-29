function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let p1Vol = p1 * h;
    let p2Vol = p2 * h;
    let sumP = p1Vol + p2Vol;
    let percentFull = sumP / v * 100;
    let percentP1 = p1Vol / sumP * 100;
    let percentP2 = p2Vol / sumP * 100;


    if (sumP <= v) {
        console.log(`The pool is ${percentFull.toFixed(2)}% full. Pipe 1: ${percentP1.toFixed(2)}%. Pipe 2: ${percentP2.toFixed(2)}%.`)
    } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${(sumP - v).toFixed(2)} liters.`)
    }
}

pipesInPool(["100", "100", "100", "2.5"]);
