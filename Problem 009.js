function findPythagoreanTriplet(sumTotal) {
    for (let a = 1; a < sumTotal / 3; a++) {
        for (let b = a + 1; b < sumTotal / 2; b++) {
            let c = sumTotal - a - b;
            if (a * a + b * b === c * c) {
                return [a, b, c];
            }
        }
    }
}

const sumTotal = 1000;
const [a, b, c] = findPythagoreanTriplet(sumTotal);
const product = a * b * c;

console.log(product);
