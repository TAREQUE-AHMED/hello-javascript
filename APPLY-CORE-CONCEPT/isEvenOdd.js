function checkEven(number) {
    const remainder = number % 2;
    if (remainder === 0) {
        //console.log("Number is even");
        return true;
    }
    else {
        //console.log("Number is Odd");
        return false;
    }
}
const isNumberEven = checkEven(348);
console.log(isNumberEven);