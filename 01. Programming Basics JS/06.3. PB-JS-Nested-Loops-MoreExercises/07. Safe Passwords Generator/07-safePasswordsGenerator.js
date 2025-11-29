function safePasswordsGenerator(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let maxPasswords = Number(input[2]);

    let result = "";
    let A = 35;
    let B = 64;
    let passwords = 0;
    let isMax = false;


    for (let x = 1; x <= a; x++) {
        for (let y = 1; y <= b; y++) {
            if(A > 55){
                A = 35;
            }

            if(B > 96){
                B = 64;
            }
            if (passwords >= maxPasswords) {
                isMax = true;
                break;
            }
            result += "" + String.fromCharCode(A) + String.fromCharCode(B) + x + y + String.fromCharCode(B) + String.fromCharCode(A) + "|";
            passwords++;            
            A++;
            B++;
        }

        if (isMax) {
            break;
        }
    }

    console.log(result);
}

safePasswordsGenerator(["20", "50", "10"])