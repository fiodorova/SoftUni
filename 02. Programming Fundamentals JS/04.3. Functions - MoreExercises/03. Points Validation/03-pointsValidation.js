function pointsValidation(array){
    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];


    if(isValid(x1, y1, 0, 0)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(isValid(x2, y2, 0, 0)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(isValid(x1, y1, x2, y2)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }

    function isValid(a, b, c, d){
        let dist = Math.sqrt(Math.pow((c - a), 2) + Math.pow((d - b), 2));
        if(dist == Math.floor(dist)){
            return true;
        } else {
            return false;
        }
    }
}

pointsValidation([3, 0, 0, 4])
pointsValidation([2, 1, 1, 1])
