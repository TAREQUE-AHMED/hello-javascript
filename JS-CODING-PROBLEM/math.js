const number = Math.pow(2, 3);
// console.log(number);
const number1 = 20;
const number2 = 40;

// const gap =Math.abs(number1 - number2);
// if (gap >5) {
//     console.log('valid');
// }
// else {
//     console.log('Not valid');
// }

const value = 2.54;
const result = Math.round(value);
console.log(result);

const values = 3.22;
const result2 = Math.ceil(values);
console.log(result2);
const values1 = 3.22;
const result3 = Math.floor(values);
console.log(result3);

for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}