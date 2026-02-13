function processOddPositions(nums){  

    console.log(nums
        .filter((x, i) => i % 2)
        .map(x => x * 2)
        .reverse().join(' '));

}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);