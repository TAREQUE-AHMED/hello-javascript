function getAverage(semester1,semester2,semester3) {
    const totalMarks = semester1 + semester2 + semester3;
    const average = totalMarks / 3;
    return average;
}
const semester1 = 90;
const semester2 = 80;
const semester3 = 87;
const myAverage = getAverage(semester1, semester2, semester3);
console.log(myAverage);