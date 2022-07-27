//Global Scope
    //Local function scope
        //Local scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;

    if (celsius <= 0) {
        let isFreezing = true;
    }
    return celsius;
}

let value = convertFahrenheitToCelsius(32);

console.log(value);