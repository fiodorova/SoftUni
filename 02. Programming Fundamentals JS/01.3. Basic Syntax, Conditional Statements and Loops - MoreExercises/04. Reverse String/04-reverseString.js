function reverseString(string){
    revString = '';

for (let i = string.length - 1; i >= 0; i--) {
    let symbol = string[i];
    revString += symbol;    
}

console.log(revString);
}

reverseString("Hello");
reverseString("SoftUni");
reverseString("1234");