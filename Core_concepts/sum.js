function addTwoNumber(num1, num2) {
    const sum = num1 + num2;
    return sum;
}
const result1 = addTwoNumber(10, 20);
const result2 = addTwoNumber(30, 40);
const finalResult = addTwoNumber(result1, result2);
console.log(finalResult);