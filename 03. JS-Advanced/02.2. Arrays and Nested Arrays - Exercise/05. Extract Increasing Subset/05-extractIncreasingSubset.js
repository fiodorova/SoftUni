function extractIncreasingSubset(arr){
    let result = [arr[0]];
    let biggest = arr[0];
    for(let index = 1; index < arr.length; index++){
        let currentNum = arr[index];
        if(currentNum >= biggest){
            result.push(currentNum)
            biggest = currentNum
        }
    }

    return result;
}

console.log(extractIncreasingSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));
console.log(extractIncreasingSubset([1, 
    2, 
    3,
    4]
    ));
console.log(extractIncreasingSubset([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));
