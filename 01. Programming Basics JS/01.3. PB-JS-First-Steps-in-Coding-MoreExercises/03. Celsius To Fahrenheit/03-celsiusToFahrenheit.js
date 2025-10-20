function celsiusToFahrenheit(input) {
    let degreeCel = Number(input[0]);

    let degreeFar = degreeCel * 1.8 + 32;

    console.log(degreeFar.toFixed(2));
}

celsiusToFahrenheit(["0"])

// °C = (°F – 32) / 1,8    
// °F = °C × 1,8 + 32