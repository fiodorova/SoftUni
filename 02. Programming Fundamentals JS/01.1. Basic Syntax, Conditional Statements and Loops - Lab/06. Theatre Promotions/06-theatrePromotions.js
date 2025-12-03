function theatrePromotions(day, age){
    let price;

    if(age >= 0 && age <= 122){
        switch(day){
            case "Weekday": 
                if(age > 18 && age <= 64){
                    price = 18;
                } else {
                    price = 12;
                }
                break;
            case "Weekend": 
                if(age > 18 && age <= 64){
                    price = 20;
                } else {
                    price = 15;
                }
                break;
            case "Holiday":
                if(age <= 18){
                    price = 5;
                } else if(age <= 64){
                    price = 12;
                } else {
                    price = 10;
                } 
                break;
        }
        console.log(price + '$');

    } else {
        console.log("Error!");
    }
}
    
/*
    if(price != -1){
        console.log(price + '$');
    } else {
        console.log("Error!");
    }

  /*  let price = 0;

    if(age >= 0 && age <= 18){
        switch(day){
            case "Weekday": price = 12; break;
            case "Weekend": price = 15; break;
            case "Holiday": price = 5; break;
        }
    } else if(age > 18 && age <= 64){
        switch(day){
            case "Weekday": price = 18; break;
            case "Weekend": price = 20; break;
            case "Holiday": price = 12; break;
        }
    } else if(age > 64 && age <= 122){
        switch(day){
            case "Weekday": price = 12; break;
            case "Weekend": price = 15; break;
            case "Holiday": price = 10; break;
        }
    } else {
        console.log("Error!");
    } */


theatrePromotions('Weekday', 
42)