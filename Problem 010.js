function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    let i = 5;
    while (i * i <= n) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

function sumOfPrime(limit) {
    let total = 0;
    let num = 2;
    while (num < limit) {
        if (isPrime(num)) {
            total += num;
        }
        num += 1;
    }
    return total;
}

const limit = 2000000;
const primeSum = sumOfPrime(limit);
console.log(primeSum);
