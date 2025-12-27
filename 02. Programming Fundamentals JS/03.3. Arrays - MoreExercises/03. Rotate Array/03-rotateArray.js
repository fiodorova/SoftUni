function rotateArray(array){
    let rotations = array[array.length - 1]
    array.pop()

    for (let j = 1; j <= rotations; j++) {
        array.unshift(array[array.length - 1])
        array.pop();        
    }

    console.log(array.join(' '));
}

rotateArray(['1', '2', '3', '4', '2'])
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])