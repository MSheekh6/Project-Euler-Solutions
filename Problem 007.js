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

function findNthPrime(n) {
    let count = 0;
    let num = 1;
    while (count < n) {
        num += 1;
        if (isPrime(num)) {
            count += 1;
        }
    }
    return num;
}

const nthPrime = 10001;
const primeNumber = findNthPrime(nthPrime);
console.log(primeNumber);
