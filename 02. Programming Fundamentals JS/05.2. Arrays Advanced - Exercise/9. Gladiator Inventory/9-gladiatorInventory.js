function gladiatorInventory(array) {
  let inventory = array.shift().split(" ");

  for (let command of array) {
    let tokens = command.split(" ");
    let curCommand = tokens[0];
    let equipment = tokens[1];

    if (curCommand == "Buy") {
      if (!inventory.includes(equipment)) {
        inventory.push(equipment);
      }
    } else if (curCommand == "Trash") {
      if (inventory.includes(equipment)) {
        let eqIndex = inventory.indexOf(equipment);
        inventory.splice(eqIndex, 1);
      }
    } else if (curCommand == "Repair") {
      if (inventory.includes(equipment)) {
        let eqIndex = inventory.indexOf(equipment);
        let repaired = inventory.splice(eqIndex, 1);
        inventory.push(...repaired);
      }
    } else if(curCommand == "Upgrade"){
        let upgradeCommand = equipment.split('-');
        let equip = upgradeCommand[0];
        let upgrade = upgradeCommand[1]; 
        if(inventory.includes(equip)){
            let index = inventory.indexOf(equip)
            inventory.splice(index + 1, 0, `${equip}:${upgrade}`);
        }
    }
  }

  console.log(inventory.join(' '));
}

gladiatorInventory([
  "SWORD Shield Spear",
  "Buy Bag",
  "Trash Shield",
  "Repair Spear",
  "Upgrade SWORD-Steel",
]);
console.log("----");
gladiatorInventory([
  "SWORD Shield Spear",
  "Trash Bow",
  "Repair Shield",
  "Upgrade Helmet-V",
]);
