function simpleInterest(p, r, t) {
    const finalAmount = p*(1 + r*t);
    return finalAmount;
}
const result = simpleInterest(1000, 5, 7);
console.log(result);