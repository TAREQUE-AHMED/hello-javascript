function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum +=element;
        console.log(sum);
    }
    return sum;
}
const myNumbers = [20, 23, 35, 46, 78, 90, 98];
sumOfArray(myNumbers);