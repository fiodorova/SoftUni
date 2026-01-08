function train(train){
    let passengersInWagons = train.shift().split(' ').map(Number);
    let maxCapacity = Number(train.shift())
    
    for (let command of train) {
        let currCommand = command.split(' ');
        if(currCommand[0] === 'Add'){
            passengersInWagons.push(Number(currCommand[1]));
        } else {
            for (let index = 0; index < passengersInWagons.length; index++) {
                if(passengersInWagons[index] + Number(currCommand[0]) <= maxCapacity){
                    passengersInWagons[index] += Number(currCommand[0]);
                    break;
                }                
            }
        }        
    }

    console.log(passengersInWagons.join(' '));
}

train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)