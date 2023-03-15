function inchesToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const giveFeet = 168;
const result = inchesToFeet(giveFeet);
console.log(result);