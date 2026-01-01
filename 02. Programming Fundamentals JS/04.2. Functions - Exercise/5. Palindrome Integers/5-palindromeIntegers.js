function palindromeIntegers(inputArray){
    let arrOfNums = inputArray;

    function isPalindrom(number){
        let startNum = number;
        let reversedNum = Number(number.toString().split('').reverse().join(''));
        if(startNum == reversedNum){
            return true;
        } else {
            return false;
        }
    }

    for (let index = 0; index < arrOfNums.length; index++) {
        let currNum = arrOfNums[index];
        console.log(isPalindrom(currNum));        
    }
}

palindromeIntegers([123,323,421,121])
palindromeIntegers([32,2,232,1010])