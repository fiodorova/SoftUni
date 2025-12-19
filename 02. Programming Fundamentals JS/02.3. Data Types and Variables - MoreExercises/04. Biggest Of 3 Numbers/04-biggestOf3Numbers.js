function biggestOf3Numbers(a, b, c) {
    let max;

    if(a >= b && a >= c){
        max = a;
    }
    
    if(b >= a && b >= c){
        max = b;
    } 
    
    if(c >= a && c >= b) {
        max = c;
    }

    console.log(max);    
}

biggestOf3Numbers(-2,
    7,
    3
    )
biggestOf3Numbers(130,
    5,
    99
    )
biggestOf3Numbers(43,
    43.2,
    43.1
    )
biggestOf3Numbers(2,
    2,
    2
    )