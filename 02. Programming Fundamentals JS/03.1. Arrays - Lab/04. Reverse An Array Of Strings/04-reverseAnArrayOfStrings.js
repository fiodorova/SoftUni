function reverseAnArrayOfStrings(arr){
    for(let i = 0; i < arr.length / 2; i++){
        let k = arr.length - 1 - i;
        let temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
    }
    console.log(arr.join(' '));
}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])
reverseAnArrayOfStrings(['abc', 'def', 'hig', 'klm', 'nop'])
reverseAnArrayOfStrings(['33', '123', '0', 'dd'])