function printDNA(num){

    let seq = 'ATCGTTAGGG'

    for (let i = 0; i < num; i += 8) {
        console.log(`**${seq[i]}${seq[i + 1]}**`);
        console.log(`*${seq[i + 2]}--${seq[i + 3]}*`);
        console.log(`${seq[i + 4]}----${seq[i + 5]}`);
        console.log(`*${seq[i + 6]}--${seq[i + 7]}*`);


        
    }

}

//printDNA(4)
printDNA(10)