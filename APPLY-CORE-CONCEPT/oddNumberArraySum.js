function sumOfArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
    }
    return sum;
}

function sumOfOddNumber(numbers) {
    const OddNumbers = [];
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element % 2 != 0) {
            OddNumbers.push(element);
        }
    }
    return OddNumbers;
}
const myNumbers = [20, 23, 35, 45, 44, 46, 68];
const OddNumbers = sumOfOddNumber(myNumbers);
const OddNumberSum = sumOfArray(OddNumbers);
//sumOfArray(OddNumberSum);
console.log(OddNumberSum);

// function sumOfArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         sum +=element;
//     }
//     return sum;
// }

// function OddNumberArraySum(numbers) {
//     const OddNumber = [];
//     for (let i = 0; i < numbers.length; i++){
//         const index = i;
//         const element = numbers[index];
//         //console.log(element);
//         if (element % 2 != 0) {
//             OddNumber.push(element);
//         }
//         //console.log(OddNumber);
//     }
//     return OddNumber;
// }
// const myNumbers = [20, 23, 25, 33, 35, 37, 47, 44, 46, 48];

// const OddNumber = OddNumberArraySum(myNumbers);
// const sumOfOddNumbers = sumOfArray(OddNumber);
// console.log(sumOfOddNumbers);
