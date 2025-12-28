function nonDecreasingSubset(array){
    let result = [];
    let max = array[0];

    for (let index = 0; index < array.length; index++) {
        if(array[index] >= max){
            max = array[index]
            result.push(array[index])
        }        
    }
    console.log(result.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([ 1, 2, 3, 4])
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1])