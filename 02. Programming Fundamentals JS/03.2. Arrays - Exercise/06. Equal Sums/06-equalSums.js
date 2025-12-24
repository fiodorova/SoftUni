function equalSums(arr) {
    let isEqual = false;

    for (let index = 0; index < arr.length; index++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = index - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        for (let k = index + 1; k < arr.length; k++) {
            rightSum += arr[k];
        }

        if (leftSum == rightSum) {
            console.log(index);
            isEqual = true;
        }

    }

    if (!isEqual) {
        console.log("no");
    }
}

equalSums([1, 2, 3, 3])
equalSums([1, 2])
equalSums([1])
equalSums([1, 2, 3])
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])