
function fnName() {
    console.log('Test name');
}

let functionName = function() {
    console.log('Test functionName');
}

let convertFahrenheitToCelsius = function(fahrenheit){
    return (fahrenheit - 32) * 5/9;
}

console.log(convertFahrenheitToCelsius(32));