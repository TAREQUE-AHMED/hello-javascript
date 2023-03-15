function factorial(number) {
    let i = 1;
    let sum = 1;
    while (i <= number) {
        sum = sum * i;
        i++
    }
    return sum;
}
const result = factorial(6);
console.log(result);