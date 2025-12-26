function ladybugs(arr){

    let size = arr[0];
    let positions = arr[1].split(' ')
    let ladybugsArray = [];

    for(let i = 0; i < size; i++){
        ladybugsArray.push(0);
    }

    for(let j = 0; j < size; j++){
        let ladybugIndex = Number(positions[j]);
        if(ladybugIndex >= 0 && ladybugIndex < size){
            ladybugsArray[ladybugIndex] = 1;
        }
    }

    for(let k = 2; k < arr.length; k++){

        let commands = arr[k].split(' ');
        let index = commands[0];
        let direction = commands[1];
        let flyLength = commands[2];
        
    }

    console.log(ladybugsArray);
}

ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
)

ladybugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']
)

ladybugs([ 5, '3',
'3 left 2',
'1 left -2']
)