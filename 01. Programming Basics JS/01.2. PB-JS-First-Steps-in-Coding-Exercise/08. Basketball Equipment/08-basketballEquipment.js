function basketballEquipment(input) {
     let yearTax = Number(input[0]);
     
     let snickers = yearTax * 0.6;
     let sportWear = snickers * 0.8;
     let ball = sportWear / 4;
     let accessories = ball / 5;

     let price = yearTax + snickers + sportWear + ball + accessories;
    console.log(price);
}

basketballEquipment(["365"])