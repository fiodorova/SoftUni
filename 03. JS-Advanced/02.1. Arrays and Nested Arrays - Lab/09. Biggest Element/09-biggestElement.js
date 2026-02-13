function biggestElement(matrix) {
    let max = Number.MIN_SAFE_INTEGER;
    
    for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
        for(let colIndex = 0; colIndex < matrix[rowIndex].length; colIndex++){
            if(matrix[rowIndex][colIndex] > max){
                max = matrix[rowIndex][colIndex];
            }
        }
    }

    return max;
}

biggestElement([
  [20, 50, 10],
  [8, 33, 145],
]);
biggestElement([
  [3, 5, 7, 12],
  [-1, 4, 33, 2],
  [8, 3, 0, 4],
]);
