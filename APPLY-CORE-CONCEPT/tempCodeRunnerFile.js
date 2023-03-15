function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum +=element;
    }
    return sum;
}

function OddNumberArraySum(numbers) {
    const OddNumber = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        //console.log(element);
        if (element % 2 != 0) {
            OddNumber.push(element);
        }
        //console.log(OddNumber);
    }
    return OddNumber;
}
const myNumbers = [20, 23, 25, 33, 35, 37, 47, 44, 46, 48];

const OddNumber = OddNumberArraySum(myNumbers);
const sumOfOddNumbers = sumOfArray(OddNumber);
console.log(sumOfOddNumbers);