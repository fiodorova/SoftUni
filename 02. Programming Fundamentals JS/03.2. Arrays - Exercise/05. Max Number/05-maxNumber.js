function maxNumber(arr){
    let topInteger = [];

    for (let index = 0; index < arr.length; index++) {
        let currElem = arr[index];
        let isTopInteger = true;

        for (let j = index + 1; j < arr.length; j++) {
            let nextElem = arr[j];
            if(currElem <= nextElem){
                isTopInteger = false;
                break;
            }            
        }
        if(isTopInteger){
            topInteger.push(currElem);
        }        
    }

    console.log(topInteger.join(' '));
}

maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
maxNumber([41, 41, 34, 20])
maxNumber([27, 19, 42, 2, 13, 45, 48])