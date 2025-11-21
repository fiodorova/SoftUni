function streamOfLetters(input) {

    let index = 0;
    let command = input[index];
    index++;
    let counterC = 0;
    let counterO = 0;
    let counterN = 0;

    let word = "";
    let secretComm = "";

    while(command !== "End"){
        let letter = command;

        if (letter >= 'a' && letter <= 'z' || letter >= 'A' && letter <= 'Z'){
            if(letter === "c" && counterC === 0){
                counterC++;
            } else if (letter === "o" && counterO === 0){
                counterO++;
            } else if (letter === "n" && counterN === 0){
                counterN++;
            } else {
                word += letter;
            }

            if(counterC + counterO + counterN === 3){
                secretComm += word + " ";
                word = "";
                counterC = 0;
                counterO = 0;
                counterN = 0;
            }            
        }

        command = input[index];
        index++;
    }
    
    console.log(secretComm);
}

streamOfLetters(["o",
"S",
"%",
"o",
"l",
"^",
"v",
"e",
"c",
"n",
"&",
"m",
"e",
"c",
"o",
"n",
"End"])
