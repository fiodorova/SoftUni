function heroicInventory(array){

    let heros = [];

    for(let i = 0; i < array.length; i++){
        let [name, level, items] = array[i].split(' / ');
        
        level = Number(level);
        items = items ? items.split(', ') : [];

        heros.push({name, level, items})
    }

    console.log(JSON.stringify(heros));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
);
heroicInventory(['Jake / 1000 / Gauss, HolidayGrenade']);