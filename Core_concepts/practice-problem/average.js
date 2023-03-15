const grades = [80, 77, 88];

function getAvg(grades) {
  const total = grades.reduce((acc, c) => acc + c, 0);
  return total / grades.length;
}

const average = getAvg(grades);
console.log(average);