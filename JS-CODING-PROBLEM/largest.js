function maxInArray(numbers) {
    let largest = 0;
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if (element > largest) {
             largest=element ;
        }

    }
    return largest;
}
const heights = [992, 165, 178, 177, 810, 198];
const tallest = maxInArray(heights);
console.log(tallest);