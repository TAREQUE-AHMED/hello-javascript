function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
const result = fahrenheitToCelsius(42);
console.log(result);
