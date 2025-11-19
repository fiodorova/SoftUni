function oldBooks(input) {
    let findBook = input[0];
    let index = 1;
    let command = input[index];
    let bookCounter = 0;

    while(command !== "No More Books"){
        let book = command;
        
        if(book === findBook){
            console.log(`You checked ${bookCounter} books and found it.`);
            break;
        }
        
        bookCounter++
        index++;
        command = input[index];
    }

    if(command !== findBook){
        console.log("The book you search is not here!");
        console.log(`You checked ${bookCounter} books.`);
    }    
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


