function triplesOfLatinLetters(n) {

    for (let num1 = 0; num1 < n; num1++) {
        let letter1 = String.fromCharCode(97 + Number(num1))
        for (let num2 = 0; num2 < n; num2++) {
            let letter2 = String.fromCharCode(97 + Number(num2))
            for (let num3 = 0; num3 < n; num3++) {
                let letter3 = String.fromCharCode(97 + Number(num3))
                console.log(letter1 + letter2 + letter3)
            }
        }
    }
}

triplesOfLatinLetters('3')
triplesOfLatinLetters(2)