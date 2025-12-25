function magicSum(array, magicSum){
    for (let index = 0; index < array.length - 1; index++) {
        let current = array[index];
        for (let j = index + 1; j < array.length; j++) {
            let nextElem = array[j];
            let sum = current + nextElem;
            if(sum === magicSum){
                console.log(`${current} ${nextElem}`);
            }            
        }        
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)
magicSum([14, 20, 60, 13, 7, 19, 8], 27)
magicSum([1, 2, 3, 4, 5, 6], 6)