function tseamAccount(array) {
  let account = array[0].split(" ");

  for(let i = 1; i < array.length; i++){
      let action = array[i].split(' ');
      let command = action[0];
      let game = action[1];

      if(command === "Play!"){
          break;
      } else{
          switch(command){
            case "Install":
                if (!account.includes(game)) {
                    account.push(game);
                }
                break;
            case "Uninstall":
                for (let j = 0; j < account.length; j++) {
                    if (account[j] === game) {
                        account.splice(j, 1);
                    }
                }
                break;
            case "Update":
                for (let k = 0; k < account.length; k++) {
                  if (account[k] === game) {
                    account.splice(k, 1);
                    account.push(game);
                  }
                }
                break;
            case "Expansion":
            let expansion = game.split("-");
            let expGame = expansion.join(':');
    
            for (let m = 0; m < account.length; m++) {
              if (account[m] == expansion[0]) {
                account.splice(m + 1, 0, expGame);
                break;
              }
            }
            break;
          }
      }
  }
  console.log(account.join(' '));
}

tseamAccount([
  "CS WoW Diablo",
  "Install LoL",
  "Uninstall WoW",
  "Update Diablo",
  "Expansion CS-Go",
  "Play!",
]);
tseamAccount([
  "CS WoW Diablo",
  "Uninstall XCOM",
  "Update PeshoGame",
  "Update WoW",
  "Expansion Civ-V",
  "Play!",
]);
