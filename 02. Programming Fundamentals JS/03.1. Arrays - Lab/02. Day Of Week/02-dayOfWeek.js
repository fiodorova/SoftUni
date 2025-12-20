function dayOfWeek(dayAsNumber){
    if (dayAsNumber < 1 || dayAsNumber > 7){
        console.log("Invalid day!");
    } else {
    let days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];

    let index = dayAsNumber - 1;
    console.log(days[index]);
    }
}



dayOfWeek(3)
dayOfWeek(6)
dayOfWeek(11)