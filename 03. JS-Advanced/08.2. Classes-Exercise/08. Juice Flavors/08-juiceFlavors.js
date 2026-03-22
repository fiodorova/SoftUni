function juiceFlavors(arr){
    const juice = {}

    const bottles = new Map();

        while(arr.length > 0){
        let [juiceName, juiceQuantity] = arr.shift().split(' => ');
        juiceQuantity = Number(juiceQuantity)
        if(!juice.hasOwnProperty(juiceName)){
            juice[juiceName] = juiceQuantity;
        } else {
            juice[juiceName] += juiceQuantity;
        }

        let bottle = Math.trunc(juice[juiceName]/1000);
        
        if(juice[juiceName] >= 1000){

            if(!bottles.has(juiceName)){

                bottles.set(juiceName, bottle )
            } else {
                bottles.set(juiceName, bottle + bottles.get(juiceName));
            }            
        }
        juice[juiceName] -= bottle * 1000;       
    }

    for(let [juiceName, juiceQuantity] of bottles){
        console.log(juiceName + ' => ' + juiceQuantity);
    }
}


juiceFlavors(['Orange => 2000',
'Peach => 1432',
'Banana => 450',
'Peach => 600',
'Strawberry => 549'])

console.log('...');

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])

