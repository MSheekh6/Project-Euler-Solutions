let sumOfSquares = 0;
let total = 0;
let squareOfSums = 0;

for (let i = 0; i <= 100; i++) {
    let squared = i * i;
    total += i;
    sumOfSquares += squared;
}

squareOfSums = total * total;
let diff = sumOfSquares - squareOfSums;
console.log(Math.abs(diff));
