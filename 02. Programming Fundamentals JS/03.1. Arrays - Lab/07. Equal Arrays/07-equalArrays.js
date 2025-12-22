function equalArrays(arr1, arr2){
    let sum = 0;
    isDiff = false;
    let diffIndex;

    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
            sum += Number(arr1[i]);
        } else {
            diffIndex = i;
            isDiff = true;
            break;
        }
    }

    if(isDiff){
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
    } else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}


equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArrays(['1'], ['10'])