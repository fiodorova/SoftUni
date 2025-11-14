function hospital(input) {
    let days = Number(input[0]);
    let doctors = 7;
    let treated = 0;
    let untreated = 0;


    for(let i = 1; i <= days; i++) {
        if((i % 3 === 0) && (untreated > treated)){
            doctors++
        }
        if(input[i] <= doctors) {
            treated += Number(input[i]); 
        } else {
            treated += doctors;
            untreated += Number(input[i]) - doctors;
        }        
    }

    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}

hospital(["6", "25", "25", "25", "25", "25", "2"])

