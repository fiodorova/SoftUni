function rotateArray(arr, rotations){

    for(let index = 0; index < rotations; index++){
        arr.unshift(arr.pop())
    }
    console.log(arr.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);