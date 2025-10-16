function projCreation(input){
    let architect = input[0];
    let proj = Number(input[1])
    let hours = proj * 3;

    console.log(`The architect ${architect} will need ${hours} hours to complete ${proj} project/s.`)
}

projCreation(["George ",
"4 "]
)