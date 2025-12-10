function sortNumbers(a, b, c){
    let min = 1000000
    let max = -1000000;
    let first;
    let second;
    let third;

    if(a >= b && a >= c){
        first = a;
        if(b >= c){
            second = b;
            third = c;
        } else{
            second = c;
            third = b;
        }
    }

    if(b >= a && b >= c){
        first = b;
        if(a >= c){
            second = a;
            third = c;
        } else{
            second = c;
            third = a;
        }
    }

    if(c >= b && c >= a){
        first = c;
        if(a >= b){
            second = a;
            third = b;
        } else{
            second = b;
            third = a;
        }
    }

    console.log(first);
    console.log(second);
    console.log(third);
}

sortNumbers(2,
    1,
    3
    );
sortNumbers(-2,
    1,
    3
    );
sortNumbers(0,
    0,
    2
    );