function login(input){
    let userName = input.shift();
    let copy = userName;
    input.unshift(copy);
    let count = 0;

    for(let index = 1; index < input.length; index++){
        if(count > 3){
            console.log(`User ${userName} blocked!`);
            break;
        }

        let reverseString = input[index];
        reverseString = reverseString.split('');
        reverseString.reverse();
        reverseString = reverseString.join('');
        if(reverseString !== userName) {
            console.log("Incorrect password. Try again.");
        } else {
            console.log(`User ${userName} logged in`);
        }

        count++;
    }
}



//login(['Acer','login','go','let me in','recA']);
//login(['momo','omom']);
login(['sunny','rainy','cloudy','sunny','not sunny']);