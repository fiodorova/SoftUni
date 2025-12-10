function nextDay(year, month, day) {   

    if (month === 12 && day === 31) {
        year += 1;
        month = 1;
        day = 1;
    } else if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && (day === 31)) {
        month += 1;
        day = 1;
    } else if ((month === 4 || month === 6 || month === 9 || month === 11) && (day === 30)) {
        month += 1;
        day = 1;
    } else if (month === 2 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && (day === 29)) {
            month += 1;
            day = 1;
    } else if (month === 2 && !((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) && day === 28) {
            month += 1;
            day += 1;
    } else {
        day += 1
    }

console.log(year + "-" + month + "-" + day);
}

//nextDay(1951, 12, 24);
nextDay(2016, 2, 28);
