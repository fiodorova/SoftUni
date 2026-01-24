function minerTask(input) {

    let miner = {}

    for (let index = 0; index < input.length; index += 2) {
        let resource = input[index];
        let quantity = Number(input[index + 1]);

        if(!miner.hasOwnProperty(resource)){
            miner[resource] = quantity;
        } else {
            let existQty = miner[resource];
            miner[resource] = existQty + quantity;
        }       
    }

    for (let [resource, quantity] of Object.entries(miner)) {
        console.log(`${resource} -> ${quantity}`);        
    }
}

minerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'    ])
console.log('---');
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])