function binaryToDecimal(binary){
    let digit = 0;

    for(let i = 0; i < binary.length; i++){
        let pow = binary.length - i - 1
        digit += Number(binary[i]) * Math.pow(2, pow);
    }

    console.log(digit);
}

binaryToDecimal("00001001")
binaryToDecimal("11110000")
